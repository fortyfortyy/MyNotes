import React, {useState, useEffect, useContext} from "react";
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";

import AuthContext from "../context/AuthContext";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {Button, H2, H3, NoteHeader, TextArea} from "./styles/NotePageStyles";
import {DivApp} from "../styles/application";

const NotePage = ({match, history}) => {
    let noteId = match.params.id // shows it as a 'new'
    let [note, setNote] = useState(null) // before adding things, note will be null
    let {authTokens} = useContext(AuthContext)

    let baseURL = 'https://my-own-notes.herokuapp.com'

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`${baseURL}/notes/${noteId}/`, {
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
        let response = await fetch(`${baseURL}/notes/new/`, {
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
            history.push('/')
        } else {
            toast.error("Something gone wrong. Please try again. " +
                "If the problem happen again, please contact support", {
                position: toast.POSITION.TOP_RIGHT,
            })
        }
    }


    let updateNote = async () => {
        let response = await fetch(`${baseURL}/notes/${noteId}/`, {
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
        await fetch(`${baseURL}/notes/${noteId}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify(note)
            }
        )
        toast.error("Note has been delated!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
        })
        // redirect to the homepage
        history.push('/')
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && !note.body) {
            deleteNote()
        } else if (noteId !== 'new' && note.body) {
            updateNote()
        } else if (noteId === 'new' && note.body) {
            createNote()
        }

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