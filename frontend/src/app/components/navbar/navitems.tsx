import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import {slide as Menu} from 'react-burger-menu';
import {useMediaQuery} from 'react-responsive';
import { SCREENS } from '../responsive';
import BurgerStyle from './BurgerStyle';

const ListContainer = styled.ul`
${tw`
flex
list-none
`};
`
const NavItems = styled.li<{menu?: any}>`
${tw`
text-xs
md:text-base
text-black
font-medium
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
`};
${({menu}) =>
menu &&
css`
${tw`
text-white
text-xl
mb-3
focus:text-white
`}`}
`


function Navitems() {
  const isMobile = useMediaQuery ({maxWidth: SCREENS.sm})
if (isMobile) 
  return (
    
    <Menu right styles={BurgerStyle}>
  <ListContainer>
<NavItems menu>
    <a href="/">Home</a>
</NavItems>
<NavItems menu>
<a href="/">Cars</a>
</NavItems>
<NavItems menu>
<a href="/">Services</a>
</NavItems>
<NavItems menu>
<a href="/">Contact Us</a>
</NavItems>

  </ListContainer>
  </Menu>
  );

  return (
    
  <ListContainer>
<NavItems>
    <a href="/">Home</a>
</NavItems>
<NavItems>
<a href="/">Cars</a>
</NavItems>
<NavItems>
<a href="/">Services</a>
</NavItems>
<NavItems>
<a href="/">Contact Us</a>
</NavItems>
  </ListContainer>
 
  )

}

export default Navitems;
