import React from "react";
import {Route} from 'react-router-dom';

import './App.css';
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import Navbar from "./components/Navbar/Navbar";
import { DivApp } from "./styles/application";


const App = () => {

    return (
        <div className="container dark">
            <Navbar/>
            <DivApp>
                <Route exact path='/' component={NotesListPage} />
                <Route path='/notes/:id' component={NotePage} />
            </DivApp>
        </div>
    )
}

export default App;
