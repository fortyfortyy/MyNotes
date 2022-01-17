import React, {useEffect, useState} from "react";
import ListItem from '../components/ListItem/ListItem'
import AddButton from "../components/AddButton/AddButton";
import {NotesCount, NotesHeader, NotesList, NotesTitle} from "./styles/NoteListPageStyles";

const NotesListPage = () => {
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, []);

    let getNotes = async () => {
        let response = await fetch('http://localhost:8000/notes/')
        let data = await response.json()
        setNotes(data)
    }

    return (
        // <DivNotes>
        <>
            <NotesHeader>
                <NotesTitle> &#9782; Notes </NotesTitle>
                <NotesCount> {notes.length} </NotesCount>
            </NotesHeader>

            <NotesList>
                {notes.map((note, index) => (
                    <ListItem key={index} note={note}/>
                ))}
            </NotesList>
            <AddButton/>
        </> // </DivNotes>
    )
}

export default NotesListPage