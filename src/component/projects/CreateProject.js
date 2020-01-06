import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        this.props.createProject(this.state)
        this.props.history.push('/')
    }

    render() { 
        const { auth } = this.props;
        if(! auth.uid){
            return(
                <Redirect to={'/signin'} />
            )
        }
        return ( 
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">
                        Create New project
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

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);