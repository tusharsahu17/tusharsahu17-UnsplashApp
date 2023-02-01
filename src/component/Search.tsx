import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [value, setValue] = useState();
  const [changeValue, onChangeValue] = useState();

  return (
    <View style={styles.searchBox}>
      <View style={styles.searchBoxInside}>
        <Image
          style={styles.likeLogo}
          source={require('./../assets/heart.jpg')}
        />
        <TextInput
          style={styles.textStyle}
          onChange={onChangeValue}
          value={changeValue}
          placeholder="Search image"
        />
      </View>

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBox: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#767676',
    backgroundColor:'#E0E0E0',
    top: 10
  },
  textStyle: {
    height: 50,
  },
  searchBoxInside: {
    flexDirection: 'row',

  },
  likeLogo: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginTop: 15,
  },
});
