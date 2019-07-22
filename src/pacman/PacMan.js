import styles from "./pacman.module.css";
import pacMan from "../image/pacman.png";
import React from "react";

let PacMan = (props) => {
    let {fieldWidth, fieldHeight, pacManPosition, directionPacMan, gameStart, wallField} = props;
    let {startMove} = props;

    return <>
        <button
            onClick={() => startMove()}
            disabled={gameStart}>Start
        </button>
        <div className={styles.gameField} style={{
            width: fieldWidth + 'px',
            height: fieldHeight + 'px',
        }}>
            <div>
                <img className={styles.pacManObject} src={pacMan} style={{
                    left: pacManPosition.valueX + 'px',
                    top: pacManPosition.valueY + 'px',
                    transform: directionPacMan,
                }}/>
                <div className={styles.wallField} style={{
                    width: wallField.wallWidth + 'px',
                    height: wallField.wallHeight + 'px',
                    left: wallField.wallX + 'px',
                    top: wallField.wallY + 'px',
                }}/>
            </div>
        </div>
    </>
};

export default PacMan;

