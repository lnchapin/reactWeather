import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components'

const CardWrapper = styled.div`
  .card{
    background: papayawhip;
    border: ${props=> props.isActive? '2px solid gray': '1px solid gray'};
    cursor: pointer;
    h3{
      font-weight: 900;
    }
    img{
      width: 75px;
    }
    .card-header{
      background: ${props=> props.isActive? 'gray': null };
      color: ${props=> props.isActive? 'white': null };
      border-radius: 0;
    }
  }
  :hover{
    .card{
      border: 2px solid gray;
    }
  }
`


const DayCard = props =>{
  return(
    <Col>
      <CardWrapper onClick={props.selectDay} isActive={props.isActive}>
        <Card>
          <CardHeader>{props.day}</CardHeader>
          <CardBody>
            <h3>{props.current.toFixed(1)}°</h3>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.alt}/>
            <p>{props.low}/{props.high}</p>
            <p>Chance of precip: {props.pricp}%</p>
          </CardBody>
        </Card>
      </CardWrapper>
    </Col>
  )
}

export default DayCard;
