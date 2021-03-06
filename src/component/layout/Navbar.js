import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props
    console.log(auth.uid)
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return(
            <nav class="nav-wrapper grey darken-3">
                <div class="container">
                    <Link to='/' className="brand-logo">Project Management Tool</Link>
                    { links }
                </div>
            </nav>
    )
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);