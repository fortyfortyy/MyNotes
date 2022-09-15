import styled from "styled-components";

export const MainPageStyles = styled.div`
    // box-shadow: 0 0 20px 0 rgb(0 0 0 / 30%);
    background: linear-gradient(-90deg,#02203c,#001528);
    color: #fff !important;
    display: grid;
    justify-self: center;
    width: 100%;
    justify-items: center;
    margin: 0;
    align-items: center;
    
    @media screen and (min-width: 1024px) {
        grid-gap: 2.5rem;
    }
`

export const ExplanationContainer = styled.div`
    background-color: #f6f9fc;
    font-family: Open Sans,Helve;
    width: 100%;   
`

export const ExplanationDiv = styled.div`
    display: grid;
    justify-items: center;
    color: #02203c;
    padding: 100px 20px;
    font-family: Open Sans,Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.42857143;
`

export const ExplanationH2 = styled.h2`
    font-size: 30px;
    margin: 0 0 20px;
    text-align: center;
    font-weight: 400;
    font-family: Ubuntu,Helvetica,Arial,sans-serif;
    line-height: 1.3;
`

export const DemoButton = styled.a`
    width: 60%;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    height: 50px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 50%);
    background-color: #626ee3;
    opacity: 1;
    position: relative;
    transform: scale(1);
    transition: opacity .4s,transform .4s;
    border-radius: 4px;
    color: #fff !important;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    white-space: nowrap;
    align-items: center;
    
    &:hover {
        outline: 0;
        transform: scale(1.05);
        cursor: pointer; 
    }
    
    & > a {
        width: 100%;
    }
`

export const DemoButtonDiv = styled.div`
    padding: 20px;
    gap: 15px;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    line-height: 1.42857143;
`

export const WhatIsSimpleNotes = styled.div`
     display: grid;
     justify-content: center;
     min-height: 320px;
     transition: margin .4s;
     width: 100%;
     
     @media (max-width: 768px){
        margin: 0 auto;
        text-align: center;
     }
`

export const WhatIsSimpleNotesDiv = styled.div`
     margin 0;
     padding: 0 20px;
     max-width: 500px;
     transition: margin .4s;
     width: 100%;
     text-align: center; 
    
    @media (max-width: 768px){
       margin: 0 auto;
    }
`

export const P1 = styled.p`
    color: #fff;
    font-size: 18px;
    margin: 0 0 30px;
    line-height: 1.7;
    font-family: Open Sans,Helvetica,Arial,sans-serif;
    // display: block;
    // margin-block-start: 1em;
    // margin-block-end: 1em;
`

export const H1 = styled.h1`
    color: #fff;
    font-size: 38px;
    margin: 0 0 20px;
    font-weight: 400;   
`