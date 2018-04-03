import React from "react";
import PropTypes from "prop-types";

import AdminHeader from "../components/adminHeader";
import Box from "grommet/components/Box";

// http://react-day-picker.js.org/docs/getting-started/
import DayPicker from "react-day-picker";

import base from "../database/base";
import moment from "moment";

const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];
const WEEKDAYS_LONG = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
];
const WEEKDAYS_SHORT = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"];


  const modifiersStyles = {
    bookedDays: {
      color: 'white',
      backgroundColor: '#ffc107',
    },
  };
  
class bookingList extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    this.handleMonthChange = this.handleMonthChange.bind(this);
    
    this.state = {
      stateBookedDate: [],
    };
    
    this.currentMonth = new Date();
  }

  componentDidMount()
  {
    this.handleMonthChange(this.currentMonth);
  }
  
  handleMonthChange(month)
  {
    let Y = moment(this.props.propBookingDateTime).format("YYYY");
    let M = moment(month).format("MM");
    console.log(M);
    
    base.fetch( `/booking/${Y}/${M}`, { context: this, asArray: true })
        .then(data => {
          let res = data.map( (month,idx) => new Date( Y, M-1, month.key) );
          this.setState( {stateBookedDate:res} );
        })
        .catch(error => { console.log(error) });
    
  }
  
  render() {
    
    /* code */
    const modifiers = {
      bookedDays: this.state.stateBookedDate,
    };
    
  
    return (
      <Box>
        <Box><AdminHeader/></Box>
        <Box alignContent="around" direction="row" justify="center">
          <DayPicker
                      locale="fr"
                      months={MONTHS}
                      weekdaysLong={WEEKDAYS_LONG}
                      weekdaysShort={WEEKDAYS_SHORT}
                      firstDayOfWeek={1}
                      disabledDays={null}
                      fromMonth={this.currentMonth}
                      onDayClick={null}
                      selectedDays={null}
                      onMonthChange={this.handleMonthChange}
                      modifiers={modifiers}
                      modifiersStyles={modifiersStyles}
            />
        </Box>
      </Box>
    );
  }
}

bookingList.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (bookingList);
