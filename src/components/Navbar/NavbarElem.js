import styled from 'styled-components'
import { Container } from '../../globalStyle';
import {Link} from 'react-router-dom'
import {FaMagento} from 'react-icons/fa'


export const Nav = styled.nav  `
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
`;

export const NavbarContainer = styled(Container) `
    display: flex;
    height: 80px;
    justify-content: space-between;

    ${Container};
`;

export const NavLogo = styled(Link) `
    color:#fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items:center;
    font-weight: 700;
`;

export const NavIcon = styled(FaMagento) `
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div `
    display: none;

    @media(max-width:960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        transform: translate(-100%, 60%);
        color: #fff;
        font-size: 1.8rem;
    }
`;

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media(max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease-in-out;
        background-color: #101522;
    }
`;

export const NavItem = styled.li `
    height: 80px;
   
    @media(max-width: 960px){
        width: 100%;
    }
`;

export const NavLink = styled(Link) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;

    &:hover {
    border-bottom: 3px solid #4b59f7;
    transition: all 0.3s ease;
    }
    

    @media(max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color:#4b59f7;
            transition: all 0.3s ease;
            border: none;
        }
    }
`;
