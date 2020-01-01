import React, { Component } from 'react';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
      }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() { 
        return ( 
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="text">Project Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Project Details</label>
                        <textarea className="materialize-textarea" cols="30" rows="10" id="content" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button class="btn blue lighten-1 z-depth-0">
                            Create Project
                        </button>
                    </div>
                </form>

            </div>
         );
    }
}
 
export default CreateProject;