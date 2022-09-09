import React from "react";
import {Link} from 'react-router-dom'
import {H3,P, Span, NotesListItem} from "./ListItemStyles";

let getDate = (note) => {
    // get user friendly date of note update
    return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) => {
    // get note's title
    let title = note.body.split('\n')[0]
    if(title.length > 45) return title.slice(0, 45) // slice the title to 45 if its length more than 45 signs
    return title
}

let getContent = (note) => {
    // remove the title from the body
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, "")

    if(content.length > 45) return content.slice(0, 45)
    return content;
}

const ListItem = ({ note }) => {
    return (
        <Link to={`/notes/${ note.id }/`}>
            <NotesListItem>
                <H3>{ getTitle(note) }</H3>
                <P><Span>{ getDate(note) }</Span>{ getContent(note) }</P>
            </NotesListItem>
        </Link>
    )
}

export default ListItem

