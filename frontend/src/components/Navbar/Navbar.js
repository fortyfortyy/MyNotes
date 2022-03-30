import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiDjango, DiReact} from 'react-icons/di';

import {Container, Div1, Div2, Div3, DivUser, NavLink, SocialIcons, A} from './NavbarStyles';
import AuthContext from "../../context/AuthContext";


const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)

    return (
        <Container>
            <Div1>
                <Link to="/">
                    <A>
                        <DiDjango/>
                        <DiReact/>
                        <p>Portfolio</p>
                    </A>
                </Link>
            </Div1>
            <Div2>
                <Link to="/">
                    <NavLink>My Notes</NavLink>
                </Link>
            </Div2>

            {user && <DivUser><p><strong>Hi</strong>, {user.name}</p></DivUser>}

            <Div3>
                {
                    user ? (
                        <Link onClick={logoutUser}><NavLink>Logout</NavLink></Link>
                    ) : (
                        <Link to='/register'><NavLink>Register</NavLink></Link>
                    )
                }
                {!user && <Link to='/login'><NavLink>Login</NavLink></Link>}

                <SocialIcons href="https://github.com/fortyfortyy">
                    <AiFillGithub size="2rem"/>
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/daniel-pacek/">
                    <AiFillLinkedin size="2rem"/>
                </SocialIcons>
            </Div3>
        </Container>
    );
}
export default Header;