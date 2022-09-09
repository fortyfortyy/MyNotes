import React, {useState, useEffect, useContext} from "react";
import {v4 as uuidv4} from 'uuid';

import {Link} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import {getCurrentDate} from '../utils/helpFunctions'

import AuthContext from "../context/AuthContext";
import {DivApp} from "../styles/application";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {Button, H2, H3, NoteHeader, TextArea} from "./styles/NotePageStyles";


const NotePage = ({match, history}) => {
    let noteId = match.params.id // shows it as a 'new'
    let [note, setNote] = useState(null) // before adding things, note will be null
    let {authTokens, demoUser, demoNotes} = useContext(AuthContext)

    let baseURL = 'http://192.168.0.8:8000'

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        if (noteId === null) return

        // Demo user has data only in cache
        if (demoUser) {
            let note = demoNotes.find(obj => obj.id === noteId)
            setNote(note)
            return
        }

        let response = await fetch(`${baseURL}/api/notes/${noteId}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        setNote(data);
    }

    let createNote = async () => {
        if (demoUser) {
            // create additional data for the note in cache
            note.id = uuidv4()
            note.updated = getCurrentDate()
            demoNotes.push(note)

            // shows the info that note has been created
            toast.success("Note has been created!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
            })
            return
        }


        let response = await fetch(`${baseURL}/api/notes/new/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({...note})
        })
        await response.json()
        if (response.status === 201) {
            toast.success("Note has been created!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
            })

        } else {
            toast.error("Something gone wrong. Please try again. " +
                "If the problem happen again, please contact support", {
                position: toast.POSITION.TOP_RIGHT,
            })
        }
    }

    let updateNote = async () => {
        if (demoUser) {
            const oldDemoNoteIndex = demoNotes.findIndex(obj => obj.id === note.id)
            demoNotes[oldDemoNoteIndex].body = note.body
            demoNotes[oldDemoNoteIndex].updated = getCurrentDate()
            return
        }

        let response = await fetch(`${baseURL}/api/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({...note})
        })

        await response.json()
        if (response.status === 200) {
            toast.success("Note has been saved!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
            })
        } else {
            toast.error("Something gone wrong. Please try again. " +
                "If the problem happen again, please contact support", {
                position: toast.POSITION.TOP_RIGHT,
            })
        }
    }

    let deleteNote = async () => {
        if (demoUser) {
            const toDeleteNoteIdx = demoNotes.findIndex(obj => obj.id === note.id)
            // splice used to delete element from array, 1 means just one element
            demoNotes.splice(toDeleteNoteIdx, 1)

            toast.error("Note has been deleted!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
            })

            goToHomePage()
            return
        }

        await fetch(`${baseURL}/api/notes/${noteId}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify(note)
            }
        )
        toast.error("Note has been deleted!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
        })
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && !note.body) {
            deleteNote()
        } else if (noteId !== 'new' && note.body) {
            updateNote()
        } else if (noteId === 'new' && note.body) {
            createNote()
        }
        goToHomePage()
    }

    let goToHomePage = () => {
        history.push('/')
    }

    return (
        <DivApp>
            <NoteHeader>
                <H2>
                    <Link to='/'>
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>
                </H2>
                {noteId !== 'new' ? (
                    <H3> Edit your note </H3>
                ) : (
                    <H3> Create your note </H3>
                )
                }

                {noteId !== 'new' ? (
                    <Button onClick={deleteNote}>Delete</Button>
                ) : (
                    <Link to='/'>
                        <Button onClick={handleSubmit}>Done</Button>
                    </Link>
                )
                }
            </NoteHeader>

            <TextArea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note?.body}>

            </TextArea>
            <ToastContainer style={{top: '50px'}}/>
        </DivApp>
    )
}

export default NotePage