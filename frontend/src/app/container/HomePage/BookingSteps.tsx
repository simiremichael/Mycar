import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { faMapMarkedAlt, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'


const Container = styled.div`
margin-top: 5em;
${tw`
w-full
flex
flex-col
items-center
pt-3
pb-3
lg:pt-6
lg:pb-6
`}
`
const Title = styled.h3`
${tw`
text-xl
lg: text-4xl
text-black
font-extrabold
`}
`
const StepsContainer = styled.div`
${tw`
flex
justify-evenly
flex-wrap
mt-7
lg:mt-14
`}
`
const StepContainer = styled.div`
${tw`
flex
flex-col
md:w-96
items-center
transition-colors
hover:text-red-500
m-3
`}
`
const Step = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${tw`
flex
rounded-lg
items-center
justify-center
p-6
`}
`
const StepTitle = styled.h4`
${tw`
text-black
text-lg
font-semibold
mt-4
`}
`

const StepDecription = styled.p`
${tw`
w-10/12
text-xs
md:text-sm
text-center
text-gray-600
`}
`

const StepIcon = styled.span`
${tw`
text-red-500
text-3xl
`}
`


function BookingSteps() {
  return (
  <Container>
      <Title>Steps To Rent Your Car</Title>
   <StepsContainer>
   <StepContainer>
    <Step>
    <StepIcon>
    <FontAwesomeIcon icon={faMapMarkedAlt} />
    </StepIcon>
    </Step>
    <StepTitle>Choose Location</StepTitle>
    <StepDecription>
        Find the nearest MyCar point and book your car.
    </StepDecription>
   </StepContainer>
   <StepContainer>
    <Step>
    <StepIcon>
    <FontAwesomeIcon icon={faCalendarAlt} />
    </StepIcon>
    </Step>
    <StepTitle>Pick Up Date</StepTitle>
    <StepDecription>
        Choose the best date to pick up your car.
    </StepDecription>
   </StepContainer>
   <StepContainer>
    <Step>
    <StepIcon>
    <FontAwesomeIcon icon={faCarSide} />
    </StepIcon>
    </Step>
    <StepTitle>Book Yor Car</StepTitle>
    <StepDecription>
       Book your desired car nice and quick.
    </StepDecription>
   </StepContainer>
   </StepsContainer>   
  </Container>
  )
}

export default BookingSteps;
