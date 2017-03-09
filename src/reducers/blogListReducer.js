import Immutable from 'immutable';

const initState = Immutable.Map({
    displayState: false,
    data: []
});

let blogList = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_LOADING':
            return initState.set('displayState', action.displayState);
        case 'RECEIVED_DATA':
            return initState.set('data', action.data);
        default:
            return state;
    }
}

export default blogList;
