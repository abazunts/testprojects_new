const SET_USER = 'DND/USERS/SET_USER';
const SET_ADMIN = 'DND/USERS/SET_ADMIN';
const DEL_USER = 'DND/USERS/DEL_USER';
const DEL_ADMIN = 'DND/USERS/DEL_ADMIN';


let initialState = {
    users: {
        '1': {userId: '1', fullName: 'Dima',},
        '2': {userId: '2', fullName: 'Artem',},
        '3': {userId: '3', fullName: 'Viktor',},
        '4': {userId: '4', fullName: 'Sergey',},
    },
    admins: {},
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            let newUsers = {...state.users};
            newUsers[action.userId] = state.admins[action.userId];
            return {...state, users: newUsers};
        }
        case SET_ADMIN: {
            let newAdmins = {...state.admins};
            newAdmins[action.userId] = state.users[action.userId];
            return {...state, admins: newAdmins};
        }
        case DEL_USER: {
            let newUsers = {...state.users};
            delete newUsers[action.userId];
            return {...state, users: newUsers};
        }
        case DEL_ADMIN: {
            let newAdmins = {...state.admins};
           delete newAdmins[action.userId];
            return {...state, admins: newAdmins};
        }
        default:
            return {...state};
    }
};

export const setUser = (userId) => ({type: SET_USER, userId});
export const setAdmin = (userId) => ({type: SET_ADMIN, userId});
export const delAdmin = (userId) => ({type: DEL_ADMIN, userId});
export const delUser = (userId) => ({type: DEL_USER, userId});


export const adminMoving = (userId) => (dispatch) => {
    dispatch(setUser(userId));
    dispatch(delAdmin(userId));
};
export const userMoving = (userId) => (dispatch) => {
    dispatch(setAdmin(userId));
    dispatch(delUser(userId));
};

export default usersReducer;