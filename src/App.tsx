import React from 'react';
import styles from './app.module.css'
import {NavLink, Route} from "react-router-dom";
import UsersContainer from "./dndUsers/UI/UsersContainer";
import WarGamingContainer from "./wargaming/UI/WarGamingContainer";
import PacManContainer from "./pacman/PacManContainer";



function App() {
    return (
        <div>
            <div className={styles.navbar}>
                <NavLink  to={'/dndusers'}>DnDUsers</NavLink>
                <NavLink  to={'/wargaming'}>WarGaming</NavLink>
                <NavLink  to={'/pacman'}>PacMan</NavLink>
            </div>
            <Route path={'/dndusers'} render={() => <UsersContainer/>}/>
            <Route path={'/wargaming'} render={() => <WarGamingContainer/>}/>
            <Route path={'/pacman'} render={() => <PacManContainer/>}/>
        </div>
    );
}

export default App;
