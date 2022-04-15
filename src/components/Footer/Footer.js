import React from 'react';

import {Foooter, MainDiv, CopyrightContainer, FooterLinksContainer, FooterLink, FooterLinkDiv} from './FooterStyles';

const Footer = () => {

    return (
        <Foooter>
            <MainDiv>
                <CopyrightContainer>Copyright © 2021-2022 Daniel Pacek. All rights reserved. </CopyrightContainer>
                <FooterLinksContainer>

                    <FooterLink href="https://github.com/fortyfortyy"> Github </FooterLink>
                    <FooterLinkDiv/>
                    <FooterLink href="https://www.linkedin.com/in/daniel-pacek/"> LinkedIn </FooterLink>
                    <FooterLinkDiv/>
                    <FooterLink href="https://danielpacek.herokuapp.com/"> My Website </FooterLink>

                </FooterLinksContainer>

            </MainDiv>
        </Foooter>
    );
}

export default Footer;