import React from 'react';

const ProjectDetails = (props) =>{
    const id = props.match.params.id
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Name - {id}
                    </span>
                    <p>Project details will be displayed here</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by Gurukiran
                    </div>
                    <div>
                        1st Jan 2020
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;