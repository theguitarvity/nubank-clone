import { StyleSheet, Animated } from 'react-native'
import Constants from 'expo-constants'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const translateY = new Animated.Value(0)

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#8B10AE',
        paddingTop:getStatusBarHeight()
    },
    content:{
        flex:1,
        maxHeight:400,
        justifyContent:'center',
        zIndex:5,

    },
    card:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:4,        
        marginRight:20,
        marginLeft:20,
        height:'100%',
        position:'absolute',
        left:0,
        right:0,
        top:0,
        transform:[{
            translateY:1200
        }]
    },
    cardHeader:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        padding:30
    },
    cardContent:{
        flex:1,
        paddingTop:0,
        paddingRight:30,
        paddingLeft:30,
        justifyContent:'center'
    },
    
    cardContentTitle:{
        fontSize:13,
        color:'#999'
    },
    cardContentDescription:{
        fontSize:32,
        marginTop:3,
        color: '#333'

    },
    cardFooter:{
        padding:30,
        backgroundColor:'#eee',
        borderRadius:4
    },
    cardFoooterAnnotation:{
        fontSize:12,
        color:'#333'
    }
})