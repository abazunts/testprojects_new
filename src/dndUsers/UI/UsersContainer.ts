import {connect} from "react-redux";
import Users from "./Users";
import {userMoving, adminMoving} from "../BLL/usersReducer";
import {adminsSelector, usersSelector} from "../BLL/selectors";


let mapStateToProps = (state) => {
    return ({
        users: usersSelector(state),
        admins: adminsSelector(state),
    })
};

export default connect(mapStateToProps, {userMoving, adminMoving})(Users);