import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react'; 
  import { useNavigation } from '@react-navigation/native';
  
  const AccountType = () => {
  
    const navigation = useNavigation();
  
    return (
      <View style={{flex: 1, backgroundColor: '#8EEAD2', position:'relative'}}>
        <View style={styles.group17}>
            <View>
                <Text style={styles.title}>Profile Type</Text>
            </View>
            <View>
                <Text style={styles.txt}>Select your profile type according to your needs to exchange medicines.</Text>
            </View>
        </View>

        <View style={{padding: 10}}>
          <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            {/* Choose pharmacy account */}
            <TouchableOpacity 
              style={styles.btn1}
              onPress={() => {}}
            >
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.iconimage} source={require('../../assets/icon1.png')}/>
                    <View style={{flexDirection:'column', left:20, top:10}}>
                        <Text style={{fontWeight:'bold'}}>Pharmacy</Text>
                        <Text>Sell or donate medicine</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Choose Personal account */}
            <TouchableOpacity 
              style={styles.btn2}
              onPress={() => {}}
            >
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.iconimage} source={require('../../assets/icon2.png')}/>
                    <View style={{flexDirection:'column', left:20, top:10}}>
                        <Text style={{fontWeight:'bold'}}>Personal</Text>
                        <Text>Help or ask for help</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* next button */}
            <TouchableOpacity 
              style={styles.btn3}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Next</Text>
            </TouchableOpacity>

            <View style={styles.line}/>
            <Text style={styles.help}>Help</Text>

          </View>
        </View> 
      </View>
    )
}

const styles = StyleSheet.create({
    group17:{
        flexDirection:'column',
        position: 'absolute',
        width: 310,
        height: 113,
        left: 30,
        top: 70,
    },
    title: {
        position: 'absolute',
        width: 253,
        height: 97,
        fontFamily: '',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 36,
        lineHeight: 44,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',
        color: '#000000',
    },
    txt: {
        position: 'absolute',
        width: 310,
        height: 31,
        top: 50,
        fontFamily: '',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        textAlign : 'justify',
        color: 'rgba(0, 0, 0, 0.68)',
    },
    btn1: {
        position: 'absolute',
        width: 300,
        height: 55,
        top: 200,
        backgroundColor: '#7ADCC3'
    },
    btn2: {
        position: 'absolute',
        width: 300,
        height: 55,
        top: 300,
        backgroundColor: '#7ADCC3'
    },
    iconimage: {
        top: 10,
        left: 10,
    },
    btn3: {      
        position: 'absolute',
        width: 115,
        height: 46,
        left: 0,
        top: 400,
        left:30,
        backgroundColor: '#006B87',
        borderRadius: 10,
        padding: 10,
        
    },
    line: {
        top: 510,
        width:300,
        height:2,
        backgroundColor:'#F2EFEF',
    },
    help: {
        color: '#F2EFEF',
        top:520,        
    }
});

  export default AccountType;