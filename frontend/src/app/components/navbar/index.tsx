import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../logo/index';
import Navitems from './navitems';


const NavbarContainer = styled.div`
min-height: 60px;
${tw`
w-full
max-w-screen-2xl
flex
flex-row
items-center
lg:pl-12
lg:pr-12
justify-between
`};
`
const LogoContainer = styled.div``



function Navbar() {

  return (
  <NavbarContainer>
      <LogoContainer>
  <Logo />
  </LogoContainer>
  <Navitems />
  </NavbarContainer>
  )

}

export default Navbar;
