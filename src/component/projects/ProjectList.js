import React from 'react';

const ProjectList = () => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        Project title1
                    </span>
                    <p> Posted by Gurukiran </p>
                    <p className="grey-text">1st Jan 2020</p>
                </div>
            </div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        Project title2
                    </span>
                    <p> Posted by Gurukiran </p>
                    <p className="grey-text">1st Jan 2020</p>
                </div>
            </div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">
                        Project title3
                    </span>
                    <p> Posted by Gurukiran </p>
                    <p className="grey-text">1st Jan 2020</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;