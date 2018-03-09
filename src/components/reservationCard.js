import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import Select from "grommet/components/Select";

import Button from "grommet/components/Button";
import Paragraph from "grommet/components/Paragraph";
import Value from "grommet/components/Value";
import Box from "grommet/components/Box";

// http://react-day-picker.js.org/docs/getting-started/
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

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

class ReservationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);

    // Init React States
    let disabledDate = [];
    // disable a specific date
    //disabledDate.push(new Date(2018, 2, 6));
    // disable sunday
    disabledDate.push({ daysOfWeek: [0] });
    // disable date before today
    disabledDate.push({ before: new Date() });

    this.state = {
      stateDateSelected: this.props.propsDateSelected,
      stateTimeSelected: undefined,
      stateDisabledDate: disabledDate
    };

    this.currentMonth = new Date();
  }

  /* Represent the validation text button based ton date and time state */
  buttonTxt = () => `Réserver le ${moment(this.state.stateDateSelected).format("DD/MM/YYYY")}
                     à ${moment(this.state.stateTimeSelected, ["H:m"]).format("HH:mm")}`;

// "2018-02-17T23:17:37+01:00"
  reservationTimestamp = () =>`${moment(this.state.stateDateSelected).format("YYYY-MM-DD")}T${moment(this.state.stateTimeSelected, ["H:m"]).format("HH:mm")}`;
  
  /* select a day or unselect if click on the same day */
  handleDayClick(day, { selected, disabled }) {
    if (disabled) return;

    if (selected) {
      this.setState({ stateDateSelected: undefined });
    } else {
      this.setState({ stateDateSelected: day });
    }
    this.setState({ stateTimeSelected: undefined });
  }

  /* select time */
  handleTimeClick(time) {
    this.setState({ stateTimeSelected: time.value });
  }

  render() {
    return (
        <Card
              description="Choisir une date et une heure."
              contentPad="none"
        >
          <Box separator="all" colorIndex="light-1" margin="small"> {/* [START] inner-card Box */}
            <DayPicker
                      locale="fr"
                      months={MONTHS}
                      weekdaysLong={WEEKDAYS_LONG}
                      weekdaysShort={WEEKDAYS_SHORT}
                      firstDayOfWeek={1}
                      disabledDays={this.state.stateDisabledDate}
                      fromMonth={this.currentMonth}
                      onDayClick={this.handleDayClick}
                      selectedDays={this.state.stateDateSelected}
            /> {/* </DayPicker> */}

            {this.state.stateDateSelected ? (
              <Box> {/* [START] Enclosing Box */}
                <Box direction="row" align="center" margin="small">
                  <Value value="8" size="small" />
                  <Paragraph>
                    {" "}
                    Horaires disponibles le{" "}
                    {moment(this.state.stateDateSelected).format("DD/MM/YYYY")}:
                  </Paragraph>
                </Box>

                <Box pad={{ horizontal: "large" }} margin={{ bottom: "small" }}>
                  <Select
                    placeHolder={this.state.stateTimeSelected}
                    options={[
                      "09h00",
                      "10h00",
                      "11h00",
                      "12h00",
                      "13h00",
                      "14h00",
                      "15h00",
                      "16h00"
                    ]}
                    value={this.state.stateTimeSelected}
                    onChange={this.handleTimeClick}
                
                  /> {/* </Select> */}
                </Box>
              {/* [END] Enclosing Box */}
              </Box>
            ) : (
              null
            )}

            {this.state.stateDateSelected && this.state.stateTimeSelected ? (
                <Box align="center" pad={{ horizontal: "small", vertical: "small" }} >
                  <Button label={this.buttonTxt()} type="submit" primary={true}
                          onClick={ () => this.props.propBookDateTime( this.reservationTimestamp() ) } />
                </Box>
            ) : (
              null
            )}
          </Box> {/* [END] inner-card Box */}
        </Card>
    );
  }
}

ReservationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default ReservationCard;
