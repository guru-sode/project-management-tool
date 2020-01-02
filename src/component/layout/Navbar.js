import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
    return(
            <nav class="nav-wrapper grey darken-3">
                <div class="container">
                    <Link to='/' className="brand-logo">Project Management Tool</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
    )
}

const mapStateToProps = (state) =>{
    return{

    }
}

export default connect(mapStateToProps)(Navbar);