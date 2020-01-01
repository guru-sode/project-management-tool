export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //TODO
        dispatch({type:'CREATE_PROJECT', project})
    }
};

