import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
import UserProfile from '../../component/UserProfile';
import Search from '../../component/Search';
import ImageType from '../../component/ImageType';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_PRODUCT_DATA } from './redux/homeAction';

const Home = ({ navigation }) => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const onPress = () => {
    navigation.navigate('Login');
  };
  const { ProductData } = useSelector((state) => state.home)
  // useEffect(() => {
  //   dispatch({
  //     type: FETCH_PRODUCT_DATA,
  //   });
  // }, [dispatch])

  fetch('https://unsplash.com/napi/topics')
    .then(res => res.json())
    .then(json => console.log('hjahdkjs===============>', json));


  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          style={styles.likeLogo}
          source={require('./../../assets/unsplashlogo.png')}
        />
        <Search />

        <Pressable onPress={onPress} >
          <View style={{ width: 100, height: 50, left: 30 }}>
            <Text style={{ fontSize: 60, bottom: 20 }}>-</Text>
            <Text style={{ fontSize: 60, bottom: 60 }}>-</Text>
            <Text style={{ fontSize: 60, bottom: 100 }}>-</Text>
          </View>
        </Pressable>
      </View>

      <FlatList
        data={ProductData}
        renderItem={({ item }) => <ImageType category={item.category} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <FlatList
        data={ProductData}
        renderItem={({ item }) =>

          <UserProfile username={item.user.username} profile_img={item.user.profile_image.large} photo={item.urls.full} />
        }
        keyExtractor={item => item.id}
      />

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  likeLogo: {
    height: 25,
    width: 25,
    borderRadius: 15,
    marginTop: 20,
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row'
  }
});
