// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import {Calendar} from 'react-native-calendars';
// import CalendarStrip from 'react-native-calendar-strip';

// const LeaveApplication = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateSelect = date => {
//     setSelectedDate(date);
//   };
//   console.log(selectedDate);

//   return (
//     <View style={styles.container}>
//       <CalendarStrip
//         style={styles.calendarStrip}
//         selectedDate={selectedDate}
//         onDateSelected={handleDateSelect}

//       />
//     </View>
//   );
// };

// export default LeaveApplication;

// const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     justifyContent: 'center',
//   //     alignItems: 'center',
//   //   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   calendarStrip: {
//     width: '100%',
//     height: 100,
//     paddingTop: 20,
//     paddingBottom: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#fbfadf',
//   },
// });
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import {Calendar} from 'react-native-calendars';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from './components/CustomButton';

function LeaveApplication({navigation}) {
  const [selectedDates, setSelectedDates] = useState({});
  const one = Object.keys(selectedDates);
  const two = one.length;
  const ans1 = one[two];
  const ans2 = one[two - 1];
  console.log(ans1);
  console.log(ans2);

  const handleDayPress = day => {
    const newSelectedDates = {...selectedDates};

    // Toggle the date selection
    if (newSelectedDates[day.dateString]) {
      delete newSelectedDates[day.dateString];
    } else {
      newSelectedDates[day.dateString] = {startingDay: true, endingDay: true};
    }

    setSelectedDates(newSelectedDates);
    // console.log('selected', Object.keys(newSelectedDates));
  };

  // const getMarked = () => {
  //   let marked = {};
  //   for (let i = 1; i <= 10; i++) {
  //     let day = i.toString().padStart(2, '0');
  //     marked[`2023-12-${day}`] = {
  //       startingDay: i == 1,
  //       endingDay: i == 10,
  //       color: 'yellow',
  //       textColor: '#aaa',
  //       disabled: true,
  //     };
  //   }
  //   return marked;
  // };

  // const [selected, setSelected] = useState();
  // console.log(selected);

  return (
    <View
      style={{
        backgroundColor: '#0390f4',
        flex: 1,
        position: 'relative',
      }}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            flex: 1,
            textAlign: 'center',
          }}>
          Leave Application
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            marginTop: 5,
          }}
          onPress={() => navigation.goBack()}>
          Cancel
        </Text>
      </View>
      {/* //--------------------------------------------------- */}
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
          paddingVertical: 180,
          padding: 20,
        }}>
        <Text style={{color: 'black'}}>Leave Type</Text>
        <TextInput style={styles.input} />
        <Text style={{color: 'black'}}>From</Text>
        <TextInput style={styles.input} />
        <Text style={{color: 'black'}}> To</Text>
        <TextInput style={styles.input} />
        <Text style={{color: 'black'}}>Message</Text>
        <TextInput style={styles.input} />
        <Text style={{color: 'black', textAlign: 'right'}}>Attachment</Text>
        <CustomButton
          label={'submit'}
          color={'white'}
          backgroundColor={'blue'}
        />
      </View>
      {/* //--------------------------------------------------- */}
      <View
        style={{
          height: 300,
          width: '100%',
          backgroundColor: 'red',
          position: 'absolute',
          marginTop: 75,
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <View
          style={{
            height: 300,
            width: '90%',
            backgroundColor: 'green',
            position: 'absolute',
            // borderWidth: 1,
            overflow: 'hidden',
          }}>
          <Calendar
            // // markedDates={marked}
            // onDayPress={day => {
            //   setSelected(day.day);
            //   // props.onDaySelect && props.onDaySelect(day);
            // }}
            // markedDates={getMarked()}
            // initialDate="2023-12-01"
            // markingType="period"
            // markedDates={selectedDates}
            onDayPress={handleDayPress}
            markingType={'period'}
            style={{
              borderRadius: 5,
              // margin: 12,
              elevation: 5,
              borderWidth: 4,
              borderColor: 'rgba(100, 100, 100, 0.2)',
              padding: 70,
            }}
            theme={{
              'stylesheet.day.basic': {
                base: {
                  // width: 30,
                  height: 10,
                },
              },
              // calendarBackground: '#222',
              // dayTextColor: '#fff',
              // textDisabledColor: '#444',
              // monthTextColor: '#888',
              arrowHeight: 40,
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    height: 200,
    position: 'relative',
    display: 'flex',
  },
  input: {
    borderBottomWidth: 2,
    height: 35,
    marginBottom: 20,
    color: 'black',
  },
});

export default LeaveApplication;
