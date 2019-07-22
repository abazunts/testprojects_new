import {connect} from "react-redux";
import MainPage from "./MainPage";
import {selectButtonEnabledSelector, selectElementsSelector} from "./mainPageSelector";
import {setUnSelectElement, openCloseDialogSelector} from "../../BLL/mainPageReducer";

let mapStateToProps = (state) => {
    return {
        selectElements: selectElementsSelector(state),
        selectButtonEnabled: selectButtonEnabledSelector(state),
    }
}

export default connect(mapStateToProps, {openCloseDialogSelector, setUnSelectElement})(MainPage);