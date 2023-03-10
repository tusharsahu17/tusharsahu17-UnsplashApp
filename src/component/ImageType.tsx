import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ImageType = ({ category }) => {
  return (
    <View>
      <View style={styles.imageTypeStyle}>
        <Text style={styles.textStyles}>{category}</Text>
      </View>
    </View>
  );
};

//XihUN5tIDHuE7ToK_XiLJ4ZNzCfZ1wcPzV3l36Imi5U
export default ImageType;
const styles = StyleSheet.create({
  useNameStyle: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  imageTypeStyle: {
    width: 150,
    height: 30,
    marginLeft: 10,
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
  },
  textStyles: {
    fontSize: 17,
    textAlign: 'center'
  }
});
