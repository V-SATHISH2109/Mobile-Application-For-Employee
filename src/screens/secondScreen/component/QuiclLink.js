import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const QuiclLink = ({
  title,
  calendarAlt,
  backgroundColor,
  borderRadius,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
      <View
        style={{
          height: 70,
          width: 70,
          backgroundColor: backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius,
        }}>
        <FontAwesome5 size={40} name={calendarAlt} color={color} />
      </View>
      <Text
        style={{width: 85, textAlign: 'center', marginTop: 4, color: 'black'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default QuiclLink;

const styles = StyleSheet.create({});
