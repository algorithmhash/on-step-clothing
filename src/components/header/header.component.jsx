import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/selectors/cart.selector';
import { selectCurrentUser } from '../../redux/user/selectors/user.selector';


import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>      
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            <Link className="option" to="/profile">PROFILE</Link>
            {currentUser ?
                <div className="option" onClick={() => auth.signOut()}>  
                    SIGN OUT
                </div>
                :
                <Link className="option" to="/signin">SIGNIN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
           <CartDropdown />
        }
    </div>
);

//state in this case is the top level root reducer
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);