import {View, Text, Button, StyleSheet} from 'react-native'

const DetailsScreen = ({ navigation })  => {
    return (
      <View style={styles.DetailsScreen}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    );
  }
const styles = StyleSheet.create({
    DetailsScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
  export default DetailsScreen;