import React from 'react'
import { Button, Container } from '../../globalStyle'
import {SignUpForm,SignUpSec,FormInput, FormHeading} from './SignUpElm'
const SignUp = () => {
    return (
        <>
          <SignUpSec>
            <Container>
                <SignUpForm>
                    <FormHeading>SignUp</FormHeading>
                    <FormInput name='name' type='text' placeholder='Your Name'/>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                    <FormInput name='password' type='password' placeholder='Password'/>
                    <Button primary big fontBig>Submit</Button>
                </SignUpForm>   
            </Container> 
          </SignUpSec>
        </>
    )
}

export default SignUp
