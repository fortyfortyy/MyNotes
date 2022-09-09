import styled from 'styled-components';

export const Foooter = styled.footer`
    display: block;
    color: #fff;
    line-height: 1.42857143;
    font-size: 16px;
    text-align: center;
    padding-top: 60px;
`;

export const MainDiv = styled.div`
    min-height: 50px;
    width: 85%;
    display: flex;
    margin: 0 auto;
    flex-direction: column-reverse;
    padding: 30px 0;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #fff;
`

export const CopyrightContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 6px 0px;
    font-size: 12px;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
`

export const FooterLink = styled.a`
    color: #fff !important;
    font-size: 14px;
    padding: 10px 0px;
    cursor: pointer;
    text-decoration: none !important;
    
    &:after {
        border-bottom: 1px solid #626ee3;
        display: block;
        content: "";
        transform: scaleX(0.7);
        transition: transform 2000ms ease-in-out;
    }
`

export const FooterLinkDiv = styled.div`
    background-color: rgba(255,255,255,.3);
    margin: 0 15px;
    height: 15px;
    width: 2px;
`

