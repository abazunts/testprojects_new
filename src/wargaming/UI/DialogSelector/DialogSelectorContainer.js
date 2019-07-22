import React from 'react';
import DialogSelector from "./DialogSelector";
import {connect} from "react-redux";
import {
    openCloseDialogSelector,
    setFilter,
    setSearch, setSelectElements,
} from "../../BLL/mainPageReducer";
import {elementsSelector, filterSelector, searchSelector, selectElementsSelector} from "./dialogSelectors";

class DialogSelectorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectElements: this.props.selectElements,
        }
    };

    setSelectElement = (selectElementId) => {
        let newSelectElements = {...this.state.selectElements};
        newSelectElements[selectElementId] = this.props.items[selectElementId];
        this.setState({selectElements: newSelectElements})
    };

    setUnSelectElement = (id) => {
        let newSelectElements = {...this.state.selectElements};
        delete newSelectElements[id];
        this.setState({selectElements: newSelectElements});
    };

    onSaveSelectElements = () => {
        this.props.setSelectElements(this.state.selectElements)
    };



    render() {
        return <DialogSelector selectElements={this.state.selectElements}
                               closeDialogSelector={this.props.openCloseDialogSelector}
                               items={this.props.items}
                               setSelectElement={this.setSelectElement}
                               setUnSelectElement={this.setUnSelectElement}
                               onSaveSelectElements={this.onSaveSelectElements}
                               search={this.props.search}
                               filter={this.props.filter}
                               setChangeSearch={this.props.setSearch}
                               setChangeFilter={this.props.setFilter}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        selectElements: selectElementsSelector(state),
        items: elementsSelector(state),
        search: searchSelector(state),
        filter: filterSelector(state),
    }
};


export default connect(mapStateToProps, {
    openCloseDialogSelector,
    setSelectElements,
    setSearch,
    setFilter
})(DialogSelectorContainer);

