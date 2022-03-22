
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import BookCard from '../../components/bookcar/index';
import Footer from '../../components/footer/index';
import Navbar from '../../components/navbar/index';
import AboutUs from './AboutUs';
import BookingSteps from './BookingSteps';
import TopCars from './TopCars';
import TopSection from './TopSection';

const PageContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`

function HomePage() {
  return <PageContainer>
   <Navbar />
   <TopSection />
   <BookCard />
   <BookingSteps />
   <AboutUs />
   <TopCars />
   < Footer />
  </PageContainer>;
}

export default HomePage;
