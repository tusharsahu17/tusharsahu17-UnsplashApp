import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';

const UserProfile = ({ username, profile_img,photo }) => {
  // const [val, setVAl] = useState([username]);
  console.log(profile_img)
  return (

    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.profilePic}
          source={{
            uri: `${profile_img}`,
          }}
        />
        <Text style={styles.useNameStyle}>{username}</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${photo}`,
        }}
      />
      <View style={styles.likeSection}>
        <Image
          style={styles.likeLogo}
          source={require('./../assets/heart.jpg')}
        />
        <Text style={styles.plusLogo}>+</Text>
      </View>
    </View>

  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    height: 350,
    marginBottom: 80,
    marginVertical: 20,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
  },
  useNameStyle: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginLeft: 10,
    verticalAlign: 'middle',
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  tinyLogo: {
    height: '100%',
    width: '100%',
  },
  plusLogo: {
    fontSize: 30,
    marginBottom: 30,
  },
  likeLogo: {
    height: 20,
    width: 20,
    marginLeft: 30,
    marginTop: 10,
    marginRight: 15,
  },
  likeSection: {
    flexDirection: 'row',

  },
});
