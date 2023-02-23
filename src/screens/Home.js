import { 
  View, 
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react'; 
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#8EEAD2'}}>
      <View style={{}}>
        <Image 
          // style={styles.homeLogo}
          // source={require('../../assets/home.png')}
        />
      </View>
      <View style={{padding: 100}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity 
            style={styles.button1}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button2}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View> 
      <View style={{padding: 80}}>
        <Text style={{textAlign: 'center'}}>By continuing, you agree with our{'\n'}Terms of Service & Privacy Policy</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeLogo: {
    width: '100%',
    height: 400,
    padding:60
  },
  button1: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    marginRight:25,
    width:80 
  },
  button2: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    marginLeft: 25,
    width:80
  }
});

export default Home;