export const Directions = {
    RIGHT: 'rotate(0deg)',
    LEFT: 'rotate(180deg)',
    UP: 'rotate(270deg)',
    DOWN: 'rotate(90deg)',
}

const SET_PAC_MAN_POSITION = 'PACMAN/SET_PAC_MAN_POSITION';
const SET_DIRECTION = 'PACMAN/SET_DIRECTION';
const SET_GAME_START = 'PACMAN/SET_GAME_START';

let initState = {
    fieldWidth: 600,
    fieldHeight: 600,
    pacManPosition: {valueX: 0, valueY: 0},
    pacManSize: 40,
    directionPacMan: Directions.RIGHT,
    gameStart: false,

    wallField: {
        wallWidth: 60,
        wallHeight: 60,
        wallX: 45,
        wallY: 45,
    },
};
export let interval;

let pacManReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DIRECTION:
            return {
                ...state,
                directionPacMan: action.direction,
            };
        case SET_PAC_MAN_POSITION:
            return {
                ...state,
                pacManPosition: {...state.pacManPosition, valueX: action.x, valueY: action.y}
            };
        case SET_GAME_START:
            return {
                ...state,
                gameStart: true,
            };
        default:
            return state;
    }
    ;
};

export const setPacManPosition = (x, y) => ({type: SET_PAC_MAN_POSITION, x, y});
export const setDirection = (direction) => ({type: SET_DIRECTION, direction});
export const setGameStart = () => ({type: SET_GAME_START});

export const startMove = () => (dispatch, getState) => {
    let state = getState().pacMan;
    let endField = state.fieldWidth - state.pacManSize;
    dispatch(setGameStart());
    interval = setInterval(() => {
        if (state.directionPacMan === Directions.RIGHT && state.pacManPosition.valueX < endField) {
            if (state.pacManPosition.valueX + state.pacManSize < state.wallField.wallX) {
                dispatch(setPacManPosition(state.pacManPosition.valueX++, state.pacManPosition.valueY))
            } else if (state.pacManPosition.valueY > state.wallField.wallY + state.wallField.wallHeight) {
                dispatch(setPacManPosition(state.pacManPosition.valueX++, state.pacManPosition.valueY))
            }
        }
        if (state.directionPacMan === Directions.DOWN && state.pacManPosition.valueY < endField) {
                dispatch(setPacManPosition(state.pacManPosition.valueX, state.pacManPosition.valueY++))
        }
        if (state.directionPacMan === Directions.LEFT && state.pacManPosition.valueX > 0) {
            dispatch(setPacManPosition(state.pacManPosition.valueX--, state.pacManPosition.valueY))
        }
        if (state.directionPacMan === Directions.UP && state.pacManPosition.valueY > 0) {
            dispatch(setPacManPosition(state.pacManPosition.valueX, state.pacManPosition.valueY--))
        }

    }, 10);
};

export default pacManReducer;
