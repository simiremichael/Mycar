import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../logo';

const FooterContainer = styled.div`
min-height: 30em;
background-color: #332100;
padding-left: 15px;
${tw`
flex
min-w-full
pt-7
pb-1
items-center
justify-center
`}
`
const InnerConatiner = styled.div`
${tw`
flex
w-full
h-full
max-w-screen-2xl
`}
`
const AboutText = styled.p`
${tw`
text-white
text-sm
font-normal
max-w-xs
leading-5
mt-2
`}
`

const AboutContainer = styled.div`
${tw`
flex
flex-col
mr-2
md:mr-12
`}
`
const SectionContainer = styled.div`
${tw`
flex
flex-col
mr-14
`}
`

const LinksList = styled.ul`
${tw`
outline-none
list-none
flex
flex-col
`}
`
const ListItem = styled.li`
${tw`
mb-3
`}
& > a{
  ${tw`
  text-sm
text-white
transition-all
hover:text-gray-200
  `}
}
`
const HeaderTitle = styled.h3`
${tw`
text-xl
font-bold
text-white
mb-3
`}
`



function Footer() {
  return (
  < FooterContainer>
  <InnerConatiner>
  <AboutContainer>
      <Logo color='white' bgColor='dark' />
      <AboutText>MyCar is a Car renting and selling portal located in Lagos, Nigeria.</AboutText>
  </AboutContainer>
  <SectionContainer>
    <HeaderTitle>Our Links</HeaderTitle>
  <LinksList>
  <ListItem><a href='#'>Home</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>About Us</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Blog</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Model</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Services</a></ListItem>
  </LinksList>
  </SectionContainer>

  <SectionContainer>
    <HeaderTitle>Other Links</HeaderTitle>
  <LinksList>
  <ListItem><a href='#'>FAQ</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Contact Us</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Support</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Privacy Policy</a></ListItem>
  </LinksList>
  <LinksList>
  <ListItem><a href='#'>Terms & Conditions</a></ListItem>
  </LinksList>
  </SectionContainer>
  </InnerConatiner>
  </ FooterContainer>
  )
}

export default Footer;
