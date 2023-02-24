import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React from 'react'; 
  import { useNavigation } from '@react-navigation/native';

  const MainHome = () => {
  
    return (
      <View style={{flex: 1, backgroundColor: '#8EEAD2', position:'relative'}}>
        {/* top frame */}
        <View style={styles.topframe}>

            {/* top bar */}
            <View style={styles.topbar}> 
               {/* title */}
                <View>
                    <Text style={styles.appTitle}>Health Direct</Text>
                </View>
                {/* search button */}
                <TouchableOpacity style={styles.search}>
                    <Image style={{height:20, width:20}} source={require('../../assets/search.png')}/>
                </TouchableOpacity>
                {/* chat button */}
                <TouchableOpacity style={styles.chat}>
                <Image style={{height:20, width:20}} source={require('../../assets/chat.png')}/>
                </TouchableOpacity>
                {/* tab bar */}
                <View style={styles.tabBar}>
                    <View style={styles.divider}/>
                    <View style={styles.tabs}>
                        {/* home tab */}
                        <TouchableOpacity
                            style={styles.tab_btn}
                            onPress={() => {}}
                        >
                            <Image style={styles.Icon_image} source={require('../../assets/home.png')}/>
                        </TouchableOpacity>
                        {/* pharmacy store tab */}
                        <TouchableOpacity
                            style={styles.tab_btn}
                            onPress={() => {}}
                        >
                            <Image style={styles.Icon_image} source={require('../../assets/pharmacy.png')}/>
                        </TouchableOpacity>
                        {/* charity tab */}
                        <TouchableOpacity
                            style={styles.tab_btn}
                            onPress={() => {}}
                        >
                            <Image style={styles.Icon_image} source={require('../../assets/charity.png')}/>
                        </TouchableOpacity>
                        {/* notification tab */}
                        <TouchableOpacity
                            style={styles.tab_btn}
                            onPress={() => {}}
                        >
                            <Image style={styles.Icon_image} source={require('../../assets/bell.png')}/>
                        </TouchableOpacity>
                        {/* menu tab */}
                        <TouchableOpacity
                            style={styles.tab_btn}
                            onPress={() => {}}
                        >
                            <Image style={styles.Icon_image} source={require('../../assets/menu.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* tab bar end */}
            </View>
            {/* tob bar end */}

            {/* post create */}
            <View style={styles.postCreate}>
                {/* content with profile */}
                <View style={styles.pcreate}>
                    <Image style={styles.profile} source={require('../../assets/defaultprofile.png')}/>
                    <TouchableOpacity style={styles.group11}>
                        <Text style={{left:10, color:'#BBBBBB'}}>Create a post here...</Text>
                    </TouchableOpacity>
                </View>
                {/* attachement bar */}
                <View style={styles.attachment}>
                    <View style={{left:10,backgroundColor:'#F2EFEF',width:3,height:17,}}/>
                    <TouchableOpacity><Image style={{left:50, height:20,width:20,}} source={require('../../assets/photo.png')}/></TouchableOpacity>
                    <View style={{left:90,backgroundColor:'#F2EFEF',width:3,height:17,}}/>
                    <TouchableOpacity><Image style={{left:140, height:20,width:20,}} source={require('../../assets/feelings.png')}/></TouchableOpacity>
                    <View style={{left:180,backgroundColor:'#F2EFEF',width:3,height:17,}}/>
                    <TouchableOpacity><Image style={{left:220, height:20,width:20,}} source={require('../../assets/locate.png')}/></TouchableOpacity>
                    <View style={{left:260,backgroundColor:'#F2EFEF',width:3,height:17,}}/>
                </View>
            </View>

        </View>
        {/* top frame end */}

        {/* posts */}
        <View style={{position:'absolute',width:'100%',height:862,top:200,overflow:'scroll'}}>
            {/* post - 1 */}
            <View style={{backgroundColor:'#FFFFFF',position:'absolute',width:'100%',top:0,height:427}}>
                <Image style={{width:45,height:45,margin:5}} source={require('../../assets/defaultprofile.png')}/>
                <Text style={{position:'absolute',fontSize:15, fontWeight:'400',top:10,left:55,color:'#5E5E5E'}}>Cassandra Taylor</Text>
                <Text style={{position:'absolute',fontSize:10,top:25, left:55, color:'#838383'}}>8h -</Text>
                <Image style={{position:'absolute',height:8,width:8,left:80,top:29}} source={require('../../assets/global.png')}/>
                <TouchableOpacity style={{position:'absolute',right: 10}}><Image style={styles.Icon_image} source={require('../../assets/more.png')}/></TouchableOpacity>
                <Text style={{left:10,color:'#383838'}}>Can someone help to find this medicines immediately.</Text>
                <View style={styles.postImage}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/post1.png')}/>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image style={{width:35,height:35}} source={require('../../assets/comment.png')}/>
                            <Text style={{margin:10}}>Comment</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image style={{width:35,height:35}} source={require('../../assets/share.png')}/>
                            <Text style={{margin:10}}>Share</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* post - 2 */}
            <View style={{backgroundColor:'#FFFFFF',position:'absolute',width:'100%',top:435,height:427}}>
            <Image style={{width:45,height:45,margin:5}} source={require('../../assets/defaultprofile.png')}/>
                <Text style={{position:'absolute',fontSize:15, fontWeight:'400',top:10,left:55,color:'#5E5E5E'}}>Nirma Pharmacy</Text>
                <Text style={{position:'absolute',fontSize:10,top:25, left:55, color:'#838383'}}>12h -</Text>
                <Image style={{position:'absolute',height:8,width:8,left:80,top:29}} source={require('../../assets/global.png')}/>
                <TouchableOpacity style={{position:'absolute',right: 10}}><Image style={styles.Icon_image} source={require('../../assets/more.png')}/></TouchableOpacity>
                <Text style={{left:10,color:'#383838'}}>Now available at Nirma Pharmacy Balangoda. 0778180663</Text>
                <View style={styles.postImage}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/post2.png')}/>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image style={{width:35,height:35}} source={require('../../assets/comment.png')}/>
                            <Text style={{margin:10}}>Comment</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image style={{width:35,height:35}} source={require('../../assets/share.png')}/>
                            <Text style={{margin:10}}>Share</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
      </View>
    )
}

const styles = StyleSheet.create({
    topframe:{
        flexDirection:'column',
        position: 'absolute',
        width: '100%',
        height: 200,
        top: 30,
        // backgroundColor: '#fff'
    },
    topbar:{
        flexDirection:'column',
        position: 'absolute',
        width: '100%',
        height: 95,
        top: 0,
    },
    appTitle: {
        position: 'absolute',
        width: 243,
        height: 29,
        fontFamily: '',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        left: 5,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'justify',
        color:  '#0A6F7A',
        
    },
    search:{
        position: 'absolute',
        width: 25,
        height: 25,
        backgroundColor: '#11A5BA',
        borderRadius: 50,
        left: 300,
        justifyContent:'center',
        alignItems: 'center'
    },
    chat:{
        position: 'absolute',
        width: 25,
        height: 25,
        backgroundColor: '#11A5BA',
        borderRadius: 50,
        left: 330,
        justifyContent:'center',
        alignItems: 'center'
    },
    tabBar:{
        display:'flex',
        flexDirection:'column',
        position: 'absolute',
        width: '100%',
        height: 50,
        top: 30,
        backgroundColor: '#11A5BA',
        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        borderRadius: 2,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#F5F5F5',
        flexGrow: 0,
    },
    tabs: {

        display:'flex',
        flexDirection: "row",
        alignItems:'flex-start',
        padding: 0,
        width: '100%',
        height: '100%',
    },
    tab_btn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#11A5BA',
        gap: 2,
        flexGrow: 0,    
        height: '100%',
        width: '20%',
    },
    Icon_image: {
        width: 25,
        height: 25,
    },
    postCreate:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 95,
        top: 75,
        justifyContent:'center',
        alignItems:'center',
    },
    pcreate: {
        width:'98%',
        height: 49,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        position: 'absolute',
        width: 45,
        height: 45,
        left: 10,
    },
    group11:{
        position:'absolute',
        backgroundColor:'#F2EFEF',
        width: 275,
        height: 40,
        left:65,
        justifyContent: 'center',
        borderRadius: 10,
    },
    attachment: {
        width: '95%',
        height: 30,
        backgroundColor: '#fff',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImage:{
        width:'100%',
        height:310,
        backgroundColor:'#D9D9D9'
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
    help: {
        color: '#F2EFEF',
        top:520,        
    }
});

  export default MainHome;