import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as AddIcon} from '../../assets/add.svg'
import {AddButtonS} from "./AddButtonStyles";

const AddButton = () => {
    return (
        <AddButtonS>
            <Link to={'/notes/new'} >
                <AddIcon />
            </Link>
        </AddButtonS>
    )
}

export default AddButton
