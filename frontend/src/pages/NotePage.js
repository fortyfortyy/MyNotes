import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {Button, H2, H3, NoteHeader, TextArea} from "./styles/NotePageStyles";

const NotePage = ({match, history}) => {
    let noteId = match.params.id // shows it as a 'new'
    let [note, setNote] = useState(null) // before adding things, note will be null

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`http://localhost:8000/notes/${noteId}/`)
        let data = await response.json()
        setNote(data);
    }

    let createNote = async () => {
        await fetch(`http://localhost:8000/notes/new/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // normally we dont have to update the date but in case of working with React server we have to make it manually
            body: JSON.stringify({...note})
        })
    }


    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            // normally we dont have to update the date but in case of working with React server we have to make it manually
            body: JSON.stringify({...note})
        })
    }

    let deleteNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            }
        )
        history.push('/')
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && !note.body) {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note !== null) {
            createNote()
        }
        // sending the user to the home page below
        history.push('/')
    }

    return (
        <div className="note">
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
                    <Button onClick={handleSubmit}>Done</Button>
                )
                }
            </NoteHeader>

            <TextArea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note?.body}>
            </TextArea>
        </div>
    )
}

export default NotePage