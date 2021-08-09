import styled from "styled-components";

export const InfoSec = styled.div `
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => lightBg ? '#fff' : '#101522'};
`;

export const InfoRow = styled.div `
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div `
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media(max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div `
    max-width: 548px;
    padding-top: 0;
    padding-bottom: 60px;

    @media(max-width: 768px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div `
    color:${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 48px;
    color: ${({lightText}) => (lightText ? '#f7fbfa' : '#1c2237')};
`;

export const SubTitle = styled.p ` 
    max-width: 448px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => lightTextDesc ? '#a9b3c1' : '#1c2337'};
`;

export const ImgWrapper = styled.div ` 
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => start ? 'flex-start' : 'flex-end'};
`;

export const Img = styled.img ` 
    padding-right: 0;
    border: 0;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    display: inline-block;
`