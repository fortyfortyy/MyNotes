import React, {useContext, useEffect, useState} from "react";
import AddButton from "../components/AddButton/AddButton";
import ListItem from '../components/ListItem/ListItem'

import {NoNotes, NotesCount, NotesHeader, NotesList, NotesTitle, PDemoUser} from "./styles/NoteListPageStyles";
import {DivApp} from "../styles/application";
import useAxios from "../utils/useAxios";
import AuthContext from "../context/AuthContext";

const NotesListPage = () => {
    let [notes, setNotes] = useState([])
    let {demoUser, demoNotes, user} = useContext(AuthContext)

    let api = useAxios()

    useEffect(() => {
        getNotes()

    }, []);

    let getNotes = async () => {
        if (user) {
            let response = await api.get('/api/notes/')
            if (response.status === 200) {
                setNotes(response.data)
            }
        } else {
            localStorage.setItem('demoNotes', JSON.stringify(demoNotes))
            setNotes(demoNotes)
        }


        // let response = await fetch('http://localhost:8000/notes/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + String(authTokens.access)
        //     }
        // })
        // let data = await response.json()

        // let response = await api.get('/api/notes/')
        // if (response.status === 200) {
        //     setNotes(response.data)
        // }
        // if (response.status === 200) {
        //     setNotes(response.data)
        // } else if (response.statusText === 'Unauthorized') {
        //     logoutUser()
        // }
    }

    return (
        <DivApp id='notesPage'>
            {demoUser ?
                (<PDemoUser> You are currently watching demo version</PDemoUser>) : null
            }
            <NotesHeader>
                <NotesTitle> &#9782; Notes </NotesTitle>
                <NotesCount> {notes.length} </NotesCount>
            </NotesHeader>

            <NotesList>
                {notes.length ?
                    (notes.map((note, index) => (
                        <ListItem key={index} note={note}/>
                    ))) : (
                        <NoNotes>You dont have any notes.</NoNotes>
                    )
                }
            </NotesList>

            <AddButton/>
        </DivApp>
    )
}

export default NotesListPage;