import styled from "styled-components";

export const SignUpSec = styled.div `
    color: #fff;
    padding: 160px 0;
    background-color: #101522;
`;

export const SignUpForm = styled.form ` 
    display: block;
    background-color: #fff;
    padding: 70px 40px;
    width: 50%;
    margin: auto;

    @media(max-width: 820px){
        width: 80%;
    }
`;

export const FormInput = styled.input ` 
    padding: 10px 20px;
    border-radius: 2px;
    margin-bottom: 20px;
    outline: none;
    font-size: 16px;
    border: 1px solid #101522;
    width: 100%;

    &::placeholder{
        color: #242424;
    };

    &:focus {
        border: 3px solid #4B59F7;
    }
`;

export const FormHeading = styled.h1 ` 
    color: #4B59F7;
    text-align: center;
    font-size: 40px;
    margin-bottom: 25px;
`