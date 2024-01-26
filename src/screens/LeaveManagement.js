import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from './components/CustomButton';

const LeaveManagement = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#0390f4',
        flex: 1,
        position: 'relative',
      }}>
      <View style={styles.header}>
        <FontAwesome5
          name="angle-left"
          style={{
            fontSize: 30,
            color: 'black',
          }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            flex: 1,
            textAlign: 'center',
          }}>
          Leave Management
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
          paddingVertical: 50,
          padding: 20,
        }}>
        <CustomButton
          width={'100%'}
          label={'New leave request'}
          backgroundColor={'#ABB8C3'}
          color={'blue'}
          onPress={() => navigation.navigate('LeaveApplication')}
        />
        {/* //--------------------------------------------- */}
        <Text style={{color: 'black', marginBottom: 10}}>Leave Summary</Text>
        <View
          style={{
            height: 200,
            width: 370,
            // backgroundColor: 'red',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
            // alignItems: 'center',
            borderWidth: 1,
            marginBottom: 10,
          }}>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text style={{color: 'black'}}>Leave Type</Text>
            <Text style={{color: 'black'}}>To Date</Text>
            <Text style={{color: 'black'}}>FromTime</Text>
            <Text style={{color: 'black'}}>Duration</Text>
          </View>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text style={{color: 'black'}}>Sick Leave</Text>
            <Text style={{color: 'black'}}>06/06/2023</Text>
            <Text style={{color: 'black'}}>06/06/2023</Text>
            <Text style={{color: 'blue'}}>3 days</Text>
          </View>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text
              style={{
                backgroundColor: 'lightgreen',
                borderRadius: 20,
                width: 80,
                textAlign: 'center',
                color: 'green',
              }}>
              approved
            </Text>
            <Text></Text>
            <Text></Text>
            <Text style={{color: 'black'}}>Edit | Cancel</Text>
          </View>
        </View>
      </View>
      {/* //----------------------------------------------------- */}
      <View
        style={{
          height: 130,
          width: '100%',
          // backgroundColor: 'white',
          position: 'absolute',
          marginTop: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 120,
            width: '90%',
            backgroundColor: 'white',
            position: 'absolute',
            borderWidth: 1,
            padding: 20,
          }}>
          <Text style={{color: 'black'}}>current leave balance</Text>
          <View
            style={{
              marginTop: 15,
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}>
                5 Days
              </Text>
              <Text style={{color: 'black'}}>Anual Leave</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}>
                6 Days
              </Text>
              <Text style={{color: 'black'}}>Seack Leave</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaveManagement;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    height: 110,
    position: 'relative',
    display: 'flex',
  },
});
