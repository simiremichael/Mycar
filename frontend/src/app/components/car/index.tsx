import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Icar } from '../../../typings/car';
import Button from '../button';
import {faFillDrip, faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';



interface ICarProps extends Icar {}

const CarContainer = styled.div`
    width: 16.5em;
    min-height: 24.2em;
    max-height: 24.2em;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
${tw`
flex
flex-col
items-center
p-3
bg-white
rounded-md
m-1
sm:m-3
md:m-6
`}
`
const CarThumnail = styled.div`
width: 100%;
height: auto;
img {
    width: 100%;
    height: 100%;
}
`
const CarName = styled.div`
${tw`
text-base
font-bold
text-black
mt-1
mb-1
`}
`
const PriceContainer = styled.div`
${tw`
w-full
flex
justify-start
mt-3
`}
`
const SmallText = styled.p`
inline-flex;
color: inherit;
${tw`
text-xs
font-thin
`}
`

const DailyPrice = styled.h5`
${tw`
text-red-500
font-bold
text-sm
mr-3
`}
`
const MonthlyPrice = styled.h5`
${tw`
text-gray-500
font-bold
text-sm
`}
`
const SmallIcon = styled.span`
${tw`
text-gray-400
text-sm
mr-1
`}
`
const CarDetailsContainer = styled.div`
${tw`
flex
w-full
justify-between
`}
`

const CarDetails = styled.span`
${tw`
flex
items-center
`}
`
const CarInfo = styled.h6`
${tw`
text-gray-400
text-xs
`}
`

const Seperator = styled.div`
min-width: 100%;
min-height: 1px;
${tw`
flex
bg-gray-300
mt-2
mb-2
`}
`
const RentButton = styled(Button)`
${tw`
min-w-full
mt-5
`}
`


export default function Car(props: ICarProps) {
   
 const {name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType, gas} = props;

 return (
  <CarContainer>
      <CarThumnail>
          <img src={thumbnailSrc} />
      </CarThumnail>
      <CarName>{name}</CarName>
      <PriceContainer>
       <DailyPrice>${ dailyPrice}<SmallText>/Daily</SmallText></DailyPrice>
       <MonthlyPrice>${ monthlyPrice}<SmallText>/Monthly</SmallText></MonthlyPrice>
      </PriceContainer>
      <Seperator />
      <CarDetailsContainer>
          <CarDetails>
              <SmallIcon>
                  <FontAwesomeIcon icon={faTachometerAlt} />
              </SmallIcon>
              <CarInfo>{mileage}</CarInfo>
          </CarDetails>
          <CarDetails>
              <SmallIcon>
                  <FontAwesomeIcon icon={faLifeRing} />
              </SmallIcon>
              <CarInfo>{gearType}</CarInfo>
          </CarDetails>
          <CarDetails>
              <SmallIcon>
                  <FontAwesomeIcon icon={faFillDrip} />
              </SmallIcon>
              <CarInfo>{gas}</CarInfo>
          </CarDetails>
      </CarDetailsContainer>
      <RentButton text='Rent Now' />
  </CarContainer>
)
}

