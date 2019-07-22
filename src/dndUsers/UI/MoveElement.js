import React from 'react';
import s from "./users.module.css";


let MoveElement = ({objects, dataId, onDrop, onDragOver, onDragStart}) => {
    return <div data-id={dataId} className={s[dataId]} onDrop={onDrop} onDragOver={onDragOver}>
        <h2>{dataId.toUpperCase()}</h2>
        {Object.keys(objects).map(obj => <span draggable onDragStart={onDragStart} data-id={objects[obj].userId}
                                             key={objects[obj].userId}>{objects[obj].fullName}</span>)}
    </div>
};

export default MoveElement;