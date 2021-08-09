import styled,{createGlobalStyle} from "styled-components";

export  const GlobalStyle = createGlobalStyle  `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        scroll-behavior: smooth;
    }
    ::selection{
        background-color: #fff;
        color: #101502;
    }
`;

export const Spinners = styled.div ` 
     text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const Container = styled.div ` 
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

@media(max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}
`;

export const Button = styled.button `
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media(max-width: 960px){
        width: 100%;
    }
`



