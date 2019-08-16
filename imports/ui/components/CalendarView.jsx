import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import { withTracker }              from 'meteor/react-meteor-data';
import { joblistingDB }             from '../../api/joblistingDB.js';

class CalendarView extends Component {
  constructor(props){
    super(props);
    this.state ={
      calendarWeekends: true,
      calendarEvents:[]
    }
    this.renderEvents = this.renderEvents.bind(this);

  }

  calendarComponentRef = React.createRef()
  
  render() {
    this.renderEvents();
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
          <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={this.state.calendarEvents}
            dateClick={ this.handleDateClick }
            />
        </div>
      </div>
    )
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }
  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }
  //event source
  renderEvents(){
    var lst = this.props.joblisting.map((item) => {
      return(
        // initial event data
        { title: item.company, 
          start: new Date(item.date),
          allDay: true
        }
      )
    })
    if (this.state.calendarEvents.length< lst.length){
      this.setState({
        calendarEvents: lst
      })
    }
    return lst;
  }

  // handleDateClick = (arg) => {
  //   if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //     this.setState({  // add new event data
  //       calendarEvents: this.state.calendarEvents.concat({ // creates a new array
  //         title: 'New Event',
  //         start: arg.date,
  //         allDay: arg.allDay
  //       })
  //     })
  //   }
  // }
}
export default withTracker((props) => {
  Meteor.subscribe('joblisting.all');
  var user = Meteor.user();
      if (user && user.emails){
        return {
        joblisting: joblistingDB.find({email: user.emails[0].address
        }).fetch(),
      }
    }else{
      return{
        joblisting: joblistingDB.find({}).fetch()
      }
    }
})(CalendarView);