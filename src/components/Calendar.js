import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import CalendarHeader from "./Calendar/CalendarHeader";
import CalendarWeekIndicator from "./Calendar/CalendarWeekIndicator";
import { COLORS, FONTS } from "../constants";
import Icon from "react-native-vector-icons/Feather";
const Calendar = ({
  date,
  onChange,
  placeholder,
  placeholderStyles,
  fieldButtonStylesDateFormat,
  fieldButtonStyles,
  fieldButtonTextStyles,
  modalBackgroundColor,
  customHeader,
  headerStyles,
  weekHeaderTextColor,
  selectedDateHighlightColor,
  selectedDateHighlightRadius,
  datesColor,
  selectedDateColor,
}) => {
  const [month, setMonth] = useState(moment().clone().month());
  const [year, setYear] = useState(moment().clone().year());
  const [isOpen, setIsOpen] = useState(false);

  function getCalendarDates(year, month) {
    const startDay = moment()
      .clone()
      .year(year)
      .month(month)
      .startOf("month")
      .startOf("week");
    const endDay = moment()
      .clone()
      .year(year)
      .month(month)
      .endOf("month")
      .endOf("week");

    const calendar = [];
    const index = startDay.clone();
    while (index.isBefore(endDay, "day")) {
      calendar.push(
        new Array(7).fill(0).map(function (n, i) {
          return { date: index.add(1, "day").format("L") };
        })
      );
    }

    return calendar;
  }
  const calendar = getCalendarDates(year, month);
// console.log(date)
  return (
    <>
      <View style={{ height: 350 }}>
        <View>
          <TouchableOpacity
            style={[
              {
                // margin: 16,
                padding: 12,
                borderRadius: 5,
                // backgroundColor: "#e3e3e3",
                justifyContent: "space-between" ,
                flexDirection:"row",
                borderColor: isOpen ? COLORS.primaryBlue : COLORS.neutralLight,
                
                borderWidth: 1,
              },
              fieldButtonStyles,
            ]}
            onPress={() => setIsOpen(!isOpen)}
          >
     
              {(placeholder !== undefined && date === null) ||
              date === undefined ? (
                <Text
                  style={[
                    {
                      fontSize: 14,
                      fontWeight: "700",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                      color: COLORS.grey,
                    },
                    placeholderStyles,
                  ]}
                >
                  {moment(placeholder).format("DD/MM/YYYY") || "Select date"}
                </Text>
              ) : (
                <Text
                  style={[
                    {
                      fontSize: 14,
                      fontWeight: "700",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                      color: COLORS.grey,
                    },
                    fieldButtonTextStyles,
                  ]}
                >
                  {moment(date).format(
                    fieldButtonStylesDateFormat || "DD/MM/YYYY"
                  )}
                </Text>
              )}
              <Icon name="calendar" size={24} color={isOpen ? COLORS.primaryBlue : COLORS.grey}></Icon>
          
          </TouchableOpacity>
        </View>
        <View>
          {isOpen && (

            <TouchableOpacity
              style={{
                borderRadius: 5,
                // backgroundColor: "#e3e3e3",
                borderColor: COLORS.neutralLight,
                borderWidth: 1,
                marginTop: 8,
              }}
              onPress={() => setIsOpen(!isOpen)}
            >
              <View
                style={[
                  {
  
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: COLORS.neutralLight,
                    borderWidth: 1,
                  },
                  modalBackgroundColor && {
                    backgroundColor: modalBackgroundColor,
                  },
                ]}
              >
                <CalendarHeader
                  date={date}
                  customHeader={customHeader}
                  headerStyles={headerStyles}
                  year={year}
                  setYear={setYear}
                  month={month}
                  setMonth={setMonth}
                />
                <CalendarWeekIndicator />
                <View style={{ width: "100%" }}>
                  {calendar.map((week, index) => (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        // borderWidth:1,
                        // borderColor:COLORS.neutralLight,
                      }}
                      key={`${week + index}`}
                    >
                      {week.map((day) => (
                        <TouchableOpacity
                          style={[
                            {
                              justifyContent: "center",

                              height: 40,
                              width: 40,
                            },
                            moment(date).isSame(moment(day.date), "day")
                              ? {
                                  backgroundColor:
                                    selectedDateHighlightColor ||
                                    COLORS.primaryBlue,
                                  borderRadius:
                                    selectedDateHighlightRadius === 0
                                      ? 0
                                      : selectedDateHighlightRadius || 100,
                                }
                              : { backgroundColor: "transparent" },
                          ]}
                          key={day.date}
                          onPress={() => {
                            onChange(moment(day.date).endOf("day"));
                            setIsOpen(!isOpen);
                          }}
                        >
                          <Text
                            style={[
                              {

                                fontSize: 14,
                                fontWeight: "700",
                                ...FONTS.fontPopinRegular,
                                lineHeight: 21,
                                letterSpacing: 0.5,
                                // marginBottom: 1,
                                textAlign: "center",
                                textAlignVertical: "center",
                              },

                              moment(date).isSame(moment(day.date), "day")
                                ? { color: COLORS.white }
                                : moment(date).isoWeekday() == 1
                                ? { color: COLORS.primaryRed }
                                : { color: datesColor || COLORS.grey },
                              // :null
                            ]}
                          >
                            {`0${moment(day.date).date()}`.slice(-2)}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
            // </Modal>
          )}
        </View>
      </View>
    </>
  );
};

export default Calendar;
