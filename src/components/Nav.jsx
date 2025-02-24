import { useContext } from 'react';
import Link from './Link';
import RouterContext from '../Contexts/Router';
import AuthContext from '../contexts/Auth';

export default function Nav() {

    const { page, Routes } = useContext(RouterContext);

    const {user} = useContext(AuthContext) ?? null;

    console.log('userNAV', user);

    const hideNav = _ => {
        if (Routes.has(page)) {
            return Routes.get(page).nav === false; // jejgu turi ir false, grazina true
        }
        return false;
    }

    if (hideNav()) {
        return null;
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link to="products">Products</Link>
                </li>
            </ul>
            <ul className='right'>
                {
                    user !== null && user.role === 'guest'
                    ? <li>
                        <Link to='login'>Login</Link>
                    </li>
                    : null
                }
                {
                    user !== null && user.role !== 'guest'
                    ? <li>
                        <Link to='logout'>{user.name}, Logout</Link>
                    </li>
                    : null
                }

                
                
            </ul>
        </nav>
    );
}