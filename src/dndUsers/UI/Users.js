import React from 'react';
import s from './users.module.css'
import MoveElement from "./MoveElement";

const ADMINS = 'admins';
const USERS = 'users';

let Users = ({users, admins, userMoving, adminMoving}) => {

    let onDragOver = (e) => {
        e.preventDefault()
    };
    let onDragStart = (e) => {
        e.dataTransfer.setData("userId", e.target.dataset.id);
    };
    let onDrop = (e) => {
        e.preventDefault();

        let userId = e.dataTransfer.getData("userId");

        switch (e.currentTarget.dataset.id) {
            case ADMINS:
                return userId in users && userMoving(userId);
            case USERS:
                return userId in admins && adminMoving(userId);
            default:
        }
    };

    return (
        <div className={s.container}>
            <MoveElement objects={users} dataId={USERS} onDrop={onDrop} onDragOver={onDragOver}
                         onDragStart={onDragStart}/>
            <MoveElement objects={admins} dataId={ADMINS} onDrop={onDrop} onDragOver={onDragOver}
                         onDragStart={onDragStart}/>
        </div>
    )
};
export default Users;