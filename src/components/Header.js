import { findByLabelText } from '@testing-library/react';
import { Link } from 'react-router-dom';

function Header(props) {
    const navStyle= {
        display: 'flex',
        flexDirection: 'flex-start',
        width: '90%', 
        marginBottom: '50px',
        marginLeft: '50px',
    }
    return (
        <header>
            <h1> Howdy </h1>
            <h2>Find all the images you want by searching based on keyword.</h2>
            <nav style={navStyle}>
                <Link to='/'>
                    <div>HOME</div>
                </Link>
            </nav>
        </header>
        )
  }
  
  export default Header;