import React, {useState, useEffect, useContext} from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {Button, H2, H3, NoteHeader, TextArea} from "./styles/NotePageStyles";
import AuthContext from "../context/AuthContext";

const NotePage = ({match, history}) => {
    let noteId = match.params.id // shows it as a 'new'
    let [note, setNote] = useState(null) // before adding things, note will be null
    let {authTokens} = useContext(AuthContext)

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`http://localhost:8000/notes/${noteId}/`, {
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
        await fetch(`http://localhost:8000/notes/new/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({...note})
        })
    }


    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({...note})
        })
    }

    let deleteNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify(note)
            }
        )
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
        <>
            <NoteHeader>
                <H2>
                    <Link to='/'>
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>
                </H2>
                <H3> Create your note </H3>
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
        </>
    )
}

export default NotePage