import React from 'react'
import { Button } from '../../globalStyle'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {FooterContainer, FooterSubHeading, FooterSubText, FooterSubscription, Form, FormInput,FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, SocialIconLink, SocialIcons,WebsiteRights} from './FooterElm'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                        <Button fontBig>Subscibe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Trems of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Trems of Service</FooterLink>
                    </FooterLinksItems>
                 </FooterLinksWrapper>
                 <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Vedios</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Trems of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonial</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Trems of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={() => window.scroll(0,0)}>
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA © 2020 </WebsiteRights>
                    <WebsiteRights>Design by: Majd Mohammed Salameh </WebsiteRights>
                    <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook/>
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram/>
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                        <FaYoutube/>
                    </SocialIconLink>

                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter/>
                    </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
