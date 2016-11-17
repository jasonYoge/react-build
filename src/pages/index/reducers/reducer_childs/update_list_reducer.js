import { IS_FETCHING, RECEIVED_DATA } from '../../actions/fetchDataList';
/**
  * update blog list state
  * @param {Object} state list data of blog
  * @param {Object} action state type object
  * @return {Object} state new state of function
  */
function updateListitems (state = {}, action) {
    switch (action.type) {
        case RECEIVED_DATA:
            return action.data;
        default:
            return state;
    }
}
/**
  * show progress bar
  * @param {Boolean} state show state of progress bar
  * @param {Object} action state type object
  * @return {Object} state new state of function
  */
function showProgressBar (state = false, action) {
    switch (action.type) {
        case IS_FETCHING:
            return action.fetchState;
        default:
            return state;
    }
}

//  export
export default {
    data: updateListitems,
    fetchState: showProgressBar
}
