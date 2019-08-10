import React from 'react';
import SearchBar from './SearchBar';
import { Col } from 'reactstrap';

const Header = () =>{
  return(
    <>
      <Col sm= {12} md={7}>
        <h1>Weather App</h1>
      </Col>
      <Col sm= {12} md={5}>
        <SearchBar />
      </Col>
    </>
  )
}

export default Header;
