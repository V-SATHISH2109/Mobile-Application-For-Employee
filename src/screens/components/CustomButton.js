import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
const CustomButton = ({label, onPress, width, backgroundColor, color}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        width: width,
        backgroundColor: backgroundColor,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: color,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
