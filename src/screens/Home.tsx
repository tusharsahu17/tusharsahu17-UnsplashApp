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
import UserProfile from '../component/UserProfile';
import Search from '../component/Search';
import ImageType from '../component/ImageType';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const onPress = () => {
    navigation.navigate('Login');
  };
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=50-tqPpgyyQT9O3vPSNZp0f2cQxpoW8E8uVzgPcEDB0',
    )
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          style={styles.likeLogo}
          source={require('./../assets/unsplashlogo.png')}
        />
        <Search />

        <Pressable onPress={onPress}>
          <View style={{ width: 100, height: 50, backgroundColor: 'red' }}>
            <Text>menu</Text>
          </View>
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <ImageType category={item.category} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <FlatList
        data={data}
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
