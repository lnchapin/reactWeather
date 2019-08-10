import React, {Component} from 'react';
import moment from 'moment';
import { Container, Row } from 'reactstrap';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import Header from './components/Header';
import data from './components/data/sample.json';


class App extends Component{
  state = {
    days:data.data
  }

  componentDidMount(){

  }

  render(){
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          {this.state.days.map(day =>(
            <DayCard
            key={day.ts}
            current={day.temp}
            high={day.max_temp}
            low={day.min_temp}
            pricp={day.pop}
            day={moment(day.datetime, 'YYYY-MM-DD').format('dddd')}
            dewpt={day.dewpt}
            icon={day.weather.icon}
            alt={day.weather.description}
            />
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
