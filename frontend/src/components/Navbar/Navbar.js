import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiDjango, DiReact} from 'react-icons/di';

import {Container, Div1, Div2, Div3, DivUser, NavLink, SocialIcons, A, Div4, Div11, LoginButton} from './NavbarStyles';
import AuthContext from "../../context/AuthContext";


const Header = () => {
    let {user, logoutUser, setDemoUserFalse} = useContext(AuthContext)

    return (

        <Container>
            {
                user ? (
                    <Div1>
                        <Link to="/notes">
                            <A>
                                <DiDjango/>
                                <DiReact/>
                            </A>
                        </Link>
                    </Div1>
                ) : (
                    <Div11>
                        <Link to="/home" onClick={setDemoUserFalse}>
                            <A>
                                <DiDjango/>
                                <DiReact/>
                            </A>
                        </Link>
                    </Div11>
                )
            }

            <Div2>
                {
                    user ? (
                        <Link to="/notes">
                            <NavLink>My Notes</NavLink>
                        </Link>
                    ) : (
                        <Link to="/home" onClick={setDemoUserFalse}>
                            <NavLink>My Notes</NavLink>
                        </Link>
                    )
                }
            </Div2>

            {user && <DivUser><p><strong>Hi</strong>, {user.name}</p></DivUser>}

            {
                user ? (
                    <Div3>
                        <Link onClick={logoutUser}><NavLink>Logout</NavLink></Link>

                        <SocialIcons href="https://github.com/fortyfortyy/MyNotes">
                            <AiFillGithub size="2rem"/>
                        </SocialIcons>
                        <SocialIcons href="https://www.linkedin.com/in/daniel-pacek/">
                            <AiFillLinkedin size="2rem"/>
                        </SocialIcons>
                    </Div3>
                ) : (
                    <Div4>
                        <SocialIcons href="https://github.com/fortyfortyy/MyNotes">
                            <AiFillGithub size="2rem"/>
                        </SocialIcons>
                        <SocialIcons href="https://www.linkedin.com/in/daniel-pacek/">
                            <AiFillLinkedin size="2rem"/>
                        </SocialIcons>
                        <LoginButton>
                            <Link to='/login' role='button'>Log In</Link>
                        </LoginButton>
                    </Div4>
                )
            }
        </Container>
    );
}
export default Header;