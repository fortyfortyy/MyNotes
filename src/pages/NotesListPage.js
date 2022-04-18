import React, {useEffect, useState, useContext} from "react";

// import AuthContext from "../context/AuthContext";
import AddButton from "../components/AddButton/AddButton";
import ListItem from '../components/ListItem/ListItem'

import {NotesCount, NotesHeader, NotesList, NotesTitle} from "./styles/NoteListPageStyles";
import {DivApp} from "../styles/application";
import useAxios from "../utils/useAxios";


const NotesListPage = () => {
    let [notes, setNotes] = useState([])
    // let {authTokens, logoutUser} = useContext(AuthContext)

    let api = useAxios()

    useEffect(() => {
        getNotes()
    }, []);

    let getNotes = async () => {
        // let response = await fetch('http://localhost:8000/notes/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + String(authTokens.access)
        //     }
        // })
        // let data = await response.json()

        let response = await api.get('/api/notes/')
        if (response.status === 200) {
            setNotes(response.data)
        }
        // if (response.status === 200) {
        //     setNotes(response.data)
        // } else if (response.statusText === 'Unauthorized') {
        //     logoutUser()
        // }
    }

    return (
        <DivApp>
            <NotesHeader>
                <NotesTitle> &#9782; Notes </NotesTitle>
                <NotesCount> {notes.length} </NotesCount>
            </NotesHeader>

            <NotesList>
                {notes ?
                    (notes.map((note, index) => (
                        <ListItem key={index} note={note}/>
                    ))) : (
                        <p>You dont have any notes.</p>
                    )
                }
            </NotesList>
            <AddButton/>
        </DivApp>
    )
}

export default NotesListPage;