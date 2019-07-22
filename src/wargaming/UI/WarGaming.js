import React from 'react';
import styles from './wargaming.module.css'
import MainPageContainer from "./MainPage/MainPageContainer";
import DialogSelectorContainer from "./DialogSelector/DialogSelectorContainer";


const WarGaming = ({dialogSelectorShowHide}) => {
    return <div className={styles.warGaming}>
        <div>
            <MainPageContainer/>
        </div>
        {dialogSelectorShowHide &&
        <div className={styles.dialogSelector}>
            <DialogSelectorContainer/>
        </div>}
    </div>
};

export default WarGaming;