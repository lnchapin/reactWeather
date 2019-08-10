import React, {Component} from 'react';
import moment from 'moment';
import { Container, Row } from 'reactstrap';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import Header from './components/Header';
import data from './components/data/sample.json';


class App extends Component{
  state = {
    days:data.data,
    selectedDay: null
  }

  componentDidMount(){

  }

  selectDay = day =>{
    this.setState({ selectedDay: day});
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
            isActive={this.state.selectedDay === day}
            selectDay={()=>this.selectDay(day)}
            />
          ))}
        </Row>
        <Row>
          {this.state.selectedDay ? (<DayDetail
          key={this.state.selectedDay.ts}
          current={this.state.selectedDay.temp}
          high={this.state.selectedDay.max_temp}
          low={this.state.selectedDay.min_temp}
          pricp={this.state.selectedDay.pop}
          day={moment(this.state.selectedDay.datetime, 'YYYY-MM-DD').format('dddd, MM DD')}
          dewpt={this.state.selectedDay.dewpt}
          icon={this.state.selectedDay.weather.icon}
          alt={this.state.selectedDay.weather.description}
        />):<h2>Please select a day for a detailed view</h2>}
        </Row>
      </Container>
    );
  }
}

export default App;
