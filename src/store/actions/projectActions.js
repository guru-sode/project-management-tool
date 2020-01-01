export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Guru',
            authorLastName: 'Kiran',
            authorId: '12345',
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })
    }
};

