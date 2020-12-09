import React from 'react';
import './SocialMedia.css';
import {Link} from 'react-router-dom';


function SocialMedia() {
    return (
        <>
            <ul className="social">
                <Link to="/signup" className="button_sign"><li>
                    <i className="fa fa-user-plus"></i>
                </li></Link>

                <Link to="/login" className="button_sign"><li>
                    <i className="fa fa-sign-in"></i>
                </li></Link>
               
            </ul>
        </>
    )
}

export default SocialMedia
