import React from 'react'
import { Button, Container } from '../../globalStyle'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img } from './infoSectionElm'
import {Link} from 'react-router-dom'
const InfoSection = ({lightBg, imgStart, lightTopLine, lightTextDesc, buttonLable, description, headLine, lightText, topLine, primary, start, img, alt}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to=''>
                                    <Button big fontBig primary={primary}>
                                        {buttonLable}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
