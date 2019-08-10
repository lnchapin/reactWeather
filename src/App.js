import React, {Component} from 'react';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import Header from './components/Header';
import { Container, Row } from 'reactstrap';
import data from './components/data/sample.json';

console.log(data);

class App extends Component{
  state = {
    days:data.data
  }

  render(){
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          {this.state.days.map(day =>(
            <DayCard key={day.ts}/>
          ))}
        </Row>
        <Row>
          <DayDetail />
        </Row>
      </Container>
    );
  }
}

export default App;
