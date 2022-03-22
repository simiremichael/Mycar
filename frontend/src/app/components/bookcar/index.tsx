import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CardContainer = styled.div`
margin-top: 5em;
align-items: center;
min-height: 4.3em;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
flex
justify-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-9
md:pr-9
`}
`
const ItemContainer = styled.div`
margin-right: 10px;
${tw`flex relative`};
`
const Icon = styled.span`
${tw`
text-red-500
fill-current
text-xs
md:text-base
mr-1
md:mr-3
`}
`
const Name = styled.span`
${tw`
text-gray-600
text-xs
md:text-sm
cursor-pointer
select-none
`}
`

const SmallIcon = styled.span`
${tw`
text-gray-500
fill-current
text-xs
md: text-base
ml-1
`}
`
const LineSeperator = styled.span`
width: 2px;
height: 45%;
${tw`
bg-gray-500
mr-2
ml-2
md:mr-5
md:ml-5
`}
`
const DateCalendar = styled(Calendar)`
position: absolute;
max-width: none;
top: 4em;
left: -2em;
`

function BookCard() {
const [startDate, setStartDate] = useState<Date>(new Date());
const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
const [returnDate, setReturnDate] = useState<Date>(new Date());
const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);


const toggleStartDateCalendar =() => {
    setStartCalendarOpen(!isStartCalendarOpen)
    if(isReturnCalendarOpen) setReturnCalendarOpen(false);
};
const toggleReturnDateCalendar =() => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if(isStartCalendarOpen) setStartCalendarOpen(false);
};

  return (
  <CardContainer>
  <ItemContainer>
<Icon>
    <FontAwesomeIcon icon={faCalendarAlt} />
</Icon>
<Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
<SmallIcon><FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown } /></SmallIcon>
{isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any}/>}
  </ItemContainer>
  
<LineSeperator />
  <ItemContainer>
<Icon>
    <FontAwesomeIcon icon={faCalendarAlt} />
</Icon>
<Name onClick={toggleReturnDateCalendar}>Return Date</Name>
<SmallIcon><FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown } /></SmallIcon>
{isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate as any}/>}
  </ItemContainer>
  <Button text='Boot Your Ride' />
  </CardContainer>
  )
}

export default BookCard;