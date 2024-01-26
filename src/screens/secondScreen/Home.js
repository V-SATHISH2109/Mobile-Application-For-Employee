import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

import QuiclLink from './component/QuiclLink';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          height: '100%',
        }}>
        <View>
          <View style={styles.profile}>
            <Text style={styles.userName}>Sathish V</Text>
            <View style={styles.profilePhoto}>
              <Image
                style={{height: 70, width: 70}}
                resizeMode="stretch"
                source={require('./profile.jpeg')}
              />
            </View>
          </View>
          {/* /----------------------------------------------------------- */}
          <Text style={{marginLeft: 15, marginBottom: 10, color: 'black'}}>
            Quick Link
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', gap: 20}}>
              <QuiclLink
                backgroundColor={'blue'}
                borderRadius={35}
                calendarAlt={'house-user'}
                title={'work from Home'}
                color={'white'}
              />
              <QuiclLink
                backgroundColor={'blue'}
                borderRadius={35}
                calendarAlt={'calendar-alt'}
                title={'view          payslip'}
                color={'white'}
              />
              <QuiclLink
                backgroundColor={'blue'}
                borderRadius={35}
                calendarAlt={'hand-holding-usd'}
                title={'Salary Advance'}
                color={'white'}
              />
              <QuiclLink
                backgroundColor={'blue'}
                borderRadius={35}
                calendarAlt={'money-check'}
                title={'view Pay slip'}
                color={'white'}
              />
              <QuiclLink
                borderRadius={35}
                backgroundColor={'blue'}
                title={'pay rool'}
              />
            </View>
          </ScrollView>
          {/* /----------------------------------------------------------- */}
          <View style={styles.QuickLink}>
            <QuiclLink
              borderRadius={10}
              calendarAlt={'calendar-alt'}
              title={'Time &     Attendance'}
              backgroundColor={'white'}
              color={'black'}
            />
            <QuiclLink
              borderRadius={10}
              calendarAlt={'edit'}
              title={'Leave         Management'}
              backgroundColor={'white'}
              color={'black'}
              onPress={() => navigation.navigate('LeaveManagement')}
            />
            <QuiclLink
              borderRadius={10}
              calendarAlt={'money-check-alt'}
              title={'View    Payroll'}
              backgroundColor={'white'}
              color={'black'}
            />
            <QuiclLink
              borderRadius={10}
              calendarAlt={'bell'}
              title={'View Notifactions'}
              backgroundColor={'white'}
              color={'black'}
            />
            <QuiclLink
              borderRadius={10}
              calendarAlt={'user-shield'}
              title={'Police & Benefits'}
              backgroundColor={'white'}
              color={'black'}
            />
            <QuiclLink
              borderRadius={10}
              calendarAlt={'check-double'}
              title={'Submit  Claim'}
              backgroundColor={'white'}
              color={'black'}
            />
          </View>
          {/* /--------------------------------------------------------- */}
          <View
            style={{
              height: 150,
              // backgroundColor: 'green',
              marginTop: 20,
              borderWidth: 1,
              borderColor: '#EDEDED',
            }}>
            <View style={{padding: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Anonucement</Text>
                <Text style={{color: 'blue'}}>View</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Holiday Eild</Text>
                <Text style={{color: 'black'}}>22,july</Text>
              </View>
            </View>
          </View>
          {/* /----------------------------------------------------- */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  profile: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
  },
  profilePhoto: {
    height: 70,
    width: 70,
    backgroundColor: 'blue',
    borderRadius: 35,
    overflow: 'hidden',
  },
  userName: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  QuickLink: {
    backgroundColor: '#EDEDED',
    // backgroundColor: 'red',

    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
    borderRadius: 20,
    gap: 35,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
