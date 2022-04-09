import styled from 'styled-components';

export const Foooter = styled.footer`
    display: block;
    color: #fff;
    line-height: 1.42857143;
    font-size: 16px;
    text-align: center;
    margin-top: 250px;
    
    @media screen and (max-width: 819px) {
          margin-top: 100px;
    }
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
    margin: 0 0 10px 0;
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
    padding: 3px 0;
    cursor: pointer;
    text-decoration: none !important;
    
    &:after {
        border-bottom: 1px solid #fff;
        display: block;
        content: "";
        transform: scaleX(0);
        transition: transform 200ms ease-in-out;
    }
`

export const FooterLinkDiv = styled.div`
    background-color: rgba(255,255,255,.3);
    margin: 0 15px;
    height: 15px;
    width: 2px;
`

