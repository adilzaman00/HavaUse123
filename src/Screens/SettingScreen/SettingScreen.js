import React,{useState} from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import {  Header, Left, Icon, Center, Right, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const SettingScreen=() => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);


    return (
        <View>
            <Header style={{backgroundColor:'transparent', elevation:0, borderBottomWidth:1, borderBottomColor:'lightgrey',}}>
                <Left style={{flex:0.3}}>
                    <Icon name='menu' />
                </Left>
                <Body style={{width:'80%', alignItems:'center'}}>
                    <Text>Settings</Text>

                </Body>
                <Right style={{flex:0.3}}>
                    
                </Right>

            </Header>


                <View style={{marginHorizontal:wp('3%')}}>
                    <View style={styles.loginbutton}> 
                       <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.loginbadge}>
                                <Icon style={{color:'#FFF', fontSize:18}} name='user' type="FontAwesome" />
                            </View>
                            <Text style={{paddingLeft:10}}>Login</Text>
                        </View>

                        <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                        </View>
                    </View>

                    <View style={{marginVertical:hp('2%')}}>
                        <Text style={{fontWeight:'bold'}}>General Setting</Text>
                    </View>

                    {/* General Setting */}

                    <View style={styles.Generalcontainer}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.Mywishbadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='hearto' type='AntDesign' />
                                </View>
                                <Text style={{paddingLeft:10}}>My Wishlist</Text>
                            </View>

                            <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                            </View>
                        </View>

                        {/* 2nd row   */}
                        <View style={{flexDirection:'row', marginTop:hp('1.5%'), justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.notificationbadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='bell-ring-outline' type="MaterialCommunityIcons" />
                                </View>
                                <Text style={{paddingLeft:10}}>Get Notification</Text>
                            </View>

                            <View>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#3FAD72" }}
                                    thumbColor={isEnabled ? "#FFF" : "#FFF"}
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        {/* 3rd Row */}

                        <View style={{flexDirection:'row', marginTop:hp('1.5%'), justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.contactbadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='md-chatbubbles-outline' type="Ionicons" />
                                </View>
                                <Text style={{paddingLeft:10}}>Contact Support</Text>
                            </View>

                            <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                            </View>
                        </View>

                        {/* 4th Roww */}

                        <View style={{flexDirection:'row', marginTop:hp('1.5%'), justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.languagebadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='language' type="MaterialIcons" />
                                </View>
                                <Text style={{paddingLeft:10}}>Language</Text>
                            </View>

                            <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                            </View>
                        </View>

                    </View>
                    {/* ********* */}

                    <View style={{marginVertical:hp('2%')}}>
                        <Text style={{fontWeight:'bold'}}>Currencies</Text>
                    </View>
                    {/* Cureencies button */}

                    <View style={styles.currenciesbutton}> 
                       <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.currenciesbadge}>
                                <Icon style={{color:'#FFF', fontSize:18}} name='user' type="FontAwesome" />
                            </View>
                            <Text style={{paddingLeft:10}}>Currencies</Text>
                        </View>

                        <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                        </View>
                    </View>
                    {/* ******************* */}

                    <View style={{marginVertical:hp('2%')}}>
                        <Text style={{fontWeight:'bold'}}>Others</Text>
                    </View>
                    {/* Others Conatiner */}

                    <View style={styles.Othercontainer}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.ratebadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='star-o' type='FontAwesome' />
                                </View>
                                <Text style={{paddingLeft:10}}>Rate the app</Text>
                            </View>

                            <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                            </View>
                        </View>

                        {/* 2nd row   */}
                        <View style={{flexDirection:'row', marginTop:hp('1.5%'), justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.darkbadge   }>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='md-moon' type='Ionicons' />
                                </View>
                                <Text style={{paddingLeft:10}}>Dark Theme</Text>
                            </View>

                            <View>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#000000" }}
                                    thumbColor={isEnabled1 ? "#FFF" : "#FFF"}
                                    onValueChange={toggleSwitch1}
                                    value={isEnabled1}
                                />
                            </View>
                        </View>

                        {/* 3rd Row */}

                        <View style={{flexDirection:'row', marginTop:hp('1.5%'), justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.privacybadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='md-shield' type="Ionicons" />
                                </View>
                                <Text style={{paddingLeft:10}}>Privacy and Term</Text>
                            </View>

                            <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                            </View>
                        </View>

                        {/* 4th Roww */}

                        <View style={{flexDirection:'row', marginTop:hp('1.5%'), justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.aboutbadge}>
                                    <Icon style={{color:'#FFF', fontSize:18}} name='exclamationcircleo' type='AntDesign' />
                                </View>
                                <Text style={{paddingLeft:10}}>About Us</Text>
                            </View>

                            <View>
                            <Icon style={{color:'grey', fontSize:18}} name="right" type="AntDesign" />
                            </View>
                        </View>

                    </View>



                </View>
            {/* ***************** */}
        </View>
    )
}

const styles= StyleSheet.create({
    loginbutton:{
        // height:hp('9%'),
        width:wp('94%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        marginTop:hp('2%'),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12
    },

    loginbadge:{
        height:hp('4.5%'),
        width:wp('9%'),
        backgroundColor:'#29ABA2',
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    Generalcontainer:{
        borderWidth:1,
        padding: 12,
        borderRadius:10,
        borderColor:'lightgrey',

    },
    Mywishbadge:{
        height:hp('4.5%'),
        backgroundColor:'#FE004E',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    notificationbadge:{
        height:hp('4.5%'),
        backgroundColor:'#3DA76E',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    contactbadge:{
        height:hp('4.5%'),
        backgroundColor:'#2CB9B0',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    languagebadge:{
        height:hp('4.5%'),
        backgroundColor:'#BC56FF',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    currenciesbutton:{
        // height:hp('9%'),
        width:wp('94%'),
        borderWidth:1,
        borderRadius:10,
        borderColor:'lightgrey',
        marginTop:hp('2%'),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12
    },
    currenciesbadge:{
        height:hp('4.5%'),
        width:wp('9%'),
        backgroundColor:'#3FAD72',
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    Othercontainer:{
        borderWidth:1,
        padding: 12,
        borderRadius:10,
        borderColor:'lightgrey',

    },
    ratebadge:{
        height:hp('4.5%'),
        backgroundColor:'#137E78',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    darkbadge:{
        height:hp('4.5%'),
        backgroundColor:'#3FAD72',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    privacybadge:{
        height:hp('4.5%'),
        backgroundColor:'#2CB9B0',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    aboutbadge:{
        height:hp('4.5%'),
        backgroundColor:'#BC56FF',
        width:wp('9%'),
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },


})


export default SettingScreen;

