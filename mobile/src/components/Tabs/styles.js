import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        height:100,
        marginTop:20,
        marginBottom:10
        
    },
    
    tabItem:{
        width:100,
        height:100,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:3,
        marginLeft:10,
        padding:10,
        justifyContent:'space-between'
    },
    tabText:{
        fontSize:13,
        color:'#fff'
    }
})