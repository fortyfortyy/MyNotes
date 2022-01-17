// import Link from 'next/link';
import {Link} from 'react-router-dom';
import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {DiDjango, DiReact} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, A} from './NavbarStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <A>
                    <DiDjango />
                    <DiReact />
                    <span>Portfolio</span>
                </A>
            </Link>
        </Div1>
        <Div2>
            <Link href="/">
                <NavLink>My Notes</NavLink>
            </Link>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/fortyfortyy">
                <AiFillGithub size="2rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/daniel-pacek/">
                <AiFillLinkedin size="2rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;