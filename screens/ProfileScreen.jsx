import {View, Text, Button, StyleSheet} from 'react-native'
// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.ProfileScreen}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    ProfileScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    }
  })
  export default ProfileScreen;