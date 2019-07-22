export const selectElementsSelector = state => state.mainPage.selectElements;
export const searchSelector = state => state.mainPage.search;
export const filterSelector = state => state.mainPage.filter;
export const elementsSelector = state => {
    let newElements = {...state.mainPage.items};
    let elements= {};
    if (state.mainPage.search) {
        Object.keys(newElements).map(key => {
            if(newElements[Number(key)].item.indexOf(state.mainPage.search) > -1) {
                elements[key] = newElements[key]
            }
        });
        newElements = elements;
    }

    if(state.mainPage.filter) {
       Object.keys(newElements).map(key => {
           if(Number(key) > state.mainPage.filter) {  elements[Number(key)] = newElements[key]}
       });
        newElements = elements;
        debugger
    }



    return newElements;
};