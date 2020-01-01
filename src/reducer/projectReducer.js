const initState = {
    projects: [
        {id: '1', title: 'Project 1', content: 'Project Details 1'},
        {id: '2', title: 'Project 2', content: 'Project Details 2'},
        {id: '3', title: 'Project 3', content: 'Project Details 3'},
        {id: '4', title: 'Project 4', content: 'Project Details 4'},
    ]
};
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Project created', action.project)
    }
    return state;
}


export default projectReducer;