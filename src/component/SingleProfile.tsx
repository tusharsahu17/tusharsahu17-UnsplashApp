import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';

const SingleProfile = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.useNameStyle}>PersonName</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require('./../assets/crish.jpg')}
          />
        </View>
        <View style={styles.likeSection}>
          <Image
            style={styles.tinyLogo}
            source={require('./../assets/Vector.png')}
          />
          <Image
            style={styles.tinyLogo}
            source={require('./../assets/Vector.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleProfile;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: '60%',
  },
  useNameStyle: {
    margin: 20,
  },
  imageContainer: {
    height: '70%',
  },
  likeSection: {
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginTop: '6%',
    marginLeft: '7%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
