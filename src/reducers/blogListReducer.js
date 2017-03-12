import Immutable from 'immutable';

const initState = Immutable.Map({
    data: []
});

let blogList = (state = initState, action) => {
    switch (action.type) {
        case 'RECEIVED_DATA':
            return initState.set('data', action.data);
        default:
            return state;
    }
}

export default blogList;
