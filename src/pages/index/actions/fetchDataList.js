import fetch from 'isomorphic-fetch';

export const IS_FETCHING = 'IS_FETCHING';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export function changeFetchState(fetchState) {
    return { type: IS_FETCHING, fetchState};
}

export function changeData(data) {
    return { type: RECEIVED_DATA, data};
}

export function getData () {
    //  return a thunk function
    //  this function get two params by redux-thunk module
    //  dispatch and getState
    return function (dispatch) {
        //  show progress bar
        dispatch(changeFetchState(true));
        //  return a promise object as a result of outer dispatch function
        return fetch('http://localhost:3000/bloglist')
            .then((res) => {
                return res.json();
            }).then((json) => {
                dispatch(changeData(json));
            }).catch((err) => {
                throw new Error(err);
            });
    }
}
