import {View, Text, Button, StyleSheet} from 'react-native'
// import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.ProfileScreen}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Profile again ..."
          onPress={() => navigation.push('ProfileScreen')}
        />
{/* alternative for go back */}
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
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