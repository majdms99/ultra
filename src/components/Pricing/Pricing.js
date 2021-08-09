import React from 'react';
import { Button } from '../../globalStyle';
import {SirvicesInfo} from '../../db/SirvicesInfo'
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingImg
} from './PricingElm';

function Pricing() {
  return (
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
              {SirvicesInfo.map(item => {
                  return (
                    <PricingCard to={item.link} key={item.id}>
                    <PricingCardInfo>
                      <PricingCardIcon>
                       <PricingImg src={item.img} alt={item.plan}/>
                      </PricingCardIcon>
                      <PricingCardPlan>{item.plan}</PricingCardPlan>
                      <PricingCardCost>{item.cost}</PricingCardCost>
                      <PricingCardLength>{item.length}</PricingCardLength>
                      <PricingCardFeatures>
                        <PricingCardFeature>{item.feature_0}</PricingCardFeature>
                        <PricingCardFeature>{item.feature_1}</PricingCardFeature>
                        <PricingCardFeature>{item.feature_2}</PricingCardFeature>
                      </PricingCardFeatures>
                      <Button primary>{item.button}</Button>
                    </PricingCardInfo>
                  </PricingCard>
                  )
              })}

            {/* <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaXbox />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaCrown />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaSketch />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard> */}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
  );
}
export default Pricing;