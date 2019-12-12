import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>      
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {currentUser ? 
            (<div 
            style={{
                display: 'flex',
                flexDirection: 'flex-start',
                width: 150,
                paddingLeft: 10 }}
                className="option">
                    <img
                    widht="35"
                    height="35"
                    alt="users google signin image"
                    style={
                            {
                                marginRight: 5,
                                marginTop: 7,
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                            }
                        }
                    src={currentUser.photoURL} />
                    <p>{currentUser.displayName}</p></div>)
                    : ''}
            {currentUser ?
                <div className="option" onClick={() => auth.signOut()}>  
                    SIGN OUT
                </div>
                :
                <Link className="option" to="/signin">SIGNIN</Link>
            }
        </div>
    </div>
);

export default Header;