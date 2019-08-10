import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  text-align: center;
`

const DayDetail = props =>{
  return(
    <Col sm={12}>
      <StyledCard>
        <CardBody>
            <h3>Day Detail {props.day}</h3>
            <br />
            <h3>{props.current.toFixed(1)}°</h3>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.alt}/>
            <p>{props.low}/{props.high}</p>
            <p>Chance of precip: {props.pricp}%</p>
          </CardBody>
      </StyledCard>
    </Col>
  )
}

export default DayDetail;
