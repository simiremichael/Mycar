import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Icar } from '../../../typings/car';
import Car from '../../components/car/index';
import {  Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Grid,Pagination } from "swiper";
import 'swiper/css/grid';


const TopCarsContainer = styled.div`
margin-top: 5em;
${tw`
max-w-screen-lg
w-full
flex-col
items-center
justify-center
pr-4
pt-4
md:pl-0
md:pr-0
mb-10
`}
`
const Title = styled.h2`
text-align: center;
${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`}
`
const CarsContainer = styled.div`

${tw`
w-full
flex
flex-wrap
justify-center
mt-7
md:mt-10
`}
`
const Swipers = styled(Swiper)`

  @media screen and (max-width: 600) {
      display: flex;
    flex-wrap: wrap;
  }
@
`

function TopCars() {

    

    const testCar1: Icar ={
        name: "Honda Accord",
        mileage: '120k',
        thumbnailSrc:
        'https://images.unsplash.com/photo-1634737581963-5a22ba471961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmRhJTIwYWNjb3JkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        dailyPrice: 15000,
        monthlyPrice: 350000,
        gearType: 'Auto',
        gas: 'Petrol',
        };
        const testCar2: Icar ={
            name: "Toyota Camry",
            mileage: '95k',
            thumbnailSrc:
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95b3RhJTIwY2Ftcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            dailyPrice: 16000,
            monthlyPrice: 370000,
            gearType: 'Auto',
            gas: 'Petrol',
            };
        
        const testCar3: Icar ={
            name: "Audi A7",
            mileage: '65k',
            thumbnailSrc:
            'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaSUyMGE3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            dailyPrice: 20000,
            monthlyPrice: 420000,
            gearType: 'Auto',
            gas: 'Petrol',
            };


  return(
  <TopCarsContainer>
   <Title>Explore Our Best Deal</Title>
   <CarsContainer>
   <Swipers
  
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide><Car {...testCar1} /></SwiperSlide>
        <SwiperSlide><Car {...testCar2} /></SwiperSlide>
        <SwiperSlide><Car {...testCar3} /></SwiperSlide>
        <SwiperSlide> <Car {...testCar1} /></SwiperSlide>
        <SwiperSlide><Car {...testCar2} /></SwiperSlide>
        <SwiperSlide><Car {...testCar3} /></SwiperSlide>
      </Swipers>
   
   </CarsContainer>
  </TopCarsContainer>
  )
}

export default TopCars;
