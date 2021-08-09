import React, {useState} from 'react'
import {Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarElem'
import {FaTimes, FaBars} from 'react-icons/fa'
import {LinksInfo} from '../../db/LinksInfo'
import { Button } from '../../globalStyle'
import {Link} from 'react-router-dom'
const Navbar = () => {

    const [click, setClick] = useState(false);

    const handelClick = () => setClick(!click);
    return (
        <Nav>
           <NavbarContainer>
               <NavLogo onClick={() => window.scroll(0,0)}>
                   <NavIcon/>
                   ULTRA
               </NavLogo>
               <MobileIcon onClick = {handelClick}>
                   {click ? <FaTimes/> : <FaBars/>}
               </MobileIcon>
               <NavMenu click={click} onClick = {handelClick}>

                   {LinksInfo.map(item => {
                       return (
                         <NavItem key={item.id} onClick={() => window.scroll(0,0)}>
                            <NavLink to={item.link}>{item.name}</NavLink>
                          </NavItem>
                       )
                   })};
                   <Link to ='/sign-up'>
                        <Button primary fontBig onClick = {() => window.scroll(0,0)}>Sign Up</Button>
                   </Link>
                        
               </NavMenu>
           </NavbarContainer>
        </Nav>
    )
}

export default Navbar
