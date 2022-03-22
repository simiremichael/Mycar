import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoDarkImg from '../../../assets/images/car-logo-dark.png';

interface IlogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

const LogoContainer = styled.div`
${tw`
flex
items-center
`};
`
const LogoText = styled.div`
${tw`
text-xl
md:text-2xl
text-black
m-1
`};
${({color}: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`as any;


const Image = styled.div`
width: auto;
${tw`h-6 md:h-9`};

img{
    width: auto;
    height: 100%;
}
`


function Logo(props: IlogoProps) {
  const {color, bgColor} = props;
  
  return (
  <LogoContainer>
      <Image>
  <img src={bgColor === 'dark' ? CarLogoDarkImg : CarLogoImg} alt='car logo' />
  </Image>
  <LogoText color={color || 'dark'}>MyCar</LogoText>
  </LogoContainer>
  )
}

export default Logo;
