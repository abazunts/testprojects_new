import React from 'react';
import {Directions, interval, setDirection, setGameStart, startMove} from "./BLL/pacManReducer";
import PacMan from "./PacMan";
import {connect} from "react-redux";


class PacManContainer extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);

    }

    componentWillMount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    startMove = () => {
        clearInterval(interval);
        this.props.startMove();
    };

    onKeyDown = (e) => {
        switch (e.keyCode) {
            case 39:
                this.props.setDirection(Directions.RIGHT);
                this.startMove();
                break;
            case 38:
                this.props.setDirection(Directions.UP);
                this.startMove();
                break;
            case 37:
                this.props.setDirection(Directions.LEFT);
                this.startMove();
                break;
            case 40:
                this.props.setDirection(Directions.DOWN);
                this.startMove();
                break;
            default:
        };
    };

    render() {
        return <PacMan {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        fieldWidth: state.pacMan.fieldWidth,
        fieldHeight: state.pacMan.fieldHeight,
        pacManPosition: state.pacMan.pacManPosition,
        pacManSize: state.pacMan.pacManSize,
        directionPacMan: state.pacMan.directionPacMan,
        gameStart: state.pacMan.gameStart,
        wallField: state.pacMan.wallField,
    }
};

export default connect(mapStateToProps, {setDirection, setGameStart, startMove})(PacManContainer);