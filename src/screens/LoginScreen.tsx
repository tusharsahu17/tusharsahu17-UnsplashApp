import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginScreen = ({ navigation }) => {
  const [changeValue, onChangeValue] = useState();
  return (
    <View>
      <Image
        style={styles.likeLogo}
        source={require('./../assets/unsplashlogo.png')}
      />
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Login</Text>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <View style={styles.loginFbButton}>
          <View style={styles.fblogoStyle}>
            <Text style={styles.fblogoText}>f</Text></View>
          <Text style={styles.btnText}>Login with Facebook</Text>
        </View>
        <Text style={styles.orText}>OR</Text>
      </View>
      <Text style={styles.loginsText}>Email</Text>
      <View style={styles.searchBox}>

        <TextInput
          style={styles.textStyle}
          onChange={onChangeValue}
          value={changeValue}
          placeholder="example123@gmail.com"
        />

      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.loginsText}>Password</Text>
        <Text style={styles.forgotText}>Forgot your password?</Text>

      </View>
      <View style={styles.searchBox}>

        <TextInput
          style={styles.textStyle}
          
          value={changeValue}
          placeholder="Example123@"
        />
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.btnText}>Login </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.orText}>Don't have an account?</Text><Text style={styles.joinUnsplashText}>Join Unsplash</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
  },
  fblogoStyle: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 5,
  },
  fblogoText: {
    left: 4,
    fontWeight: '500',
    color: '#1778f2',
    fontSize: 22,
    bottom: 1
  },
  joinUnsplashText: {
    textDecorationLine: 'underline'
  },
  bottomContainer: {
    height: '12%',
    width: '90%',
    borderWidth: 0.5,
    marginTop: 20,
    borderColor: 'grey',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginButton: {
    marginVertical: 30,
    height: 40,
    width: '90%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  forgotText: {
    marginLeft: '37%',
    textDecorationLine: 'underline'
  },
  passwordContainer: {
    flexDirection: 'row'
  },
  loginsText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20
  },
  searchBox: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#767676',
    borderRadius: 3,

  },
  orText: {
    color: 'black',
  },
  likeLogo: {
    height: 50,
    width: 50,
    marginTop: 75,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  welcomeText: {
    marginTop: 20,
    color: 'black',
  },
  loginHeading: {
    fontSize: 26,
    fontWeight: '800',
    color: 'black',
  },
  loginFbButton: {
    marginVertical: 30,
    flexDirection: 'row',
    height: 40,
    width: '90%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1778f2',
  },
  container: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'center',
  },
});
