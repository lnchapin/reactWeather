import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components'

const CardWrapper = styled.div`
  color: turquoise;
  .card{
    background: papayawhip;
    h3{
      font-weight: 900;
    }
    img{
      width: 75px;
    }
  }
`


const DayCard = props =>{
  console.log(props);
  return(
    <Col>
      <CardWrapper>
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
