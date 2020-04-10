import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
    
    },
    scrollMain:{
      marginTop :0,
      marginRight:30,
      marginLeft:30  
    },
    code:{
        backgroundColor:"#fff",
        padding:10,
        alignSelf:'center'
    },
    nav:{
        marginTop:30,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderTopColor:'rgba(255,255,255,0.8)'
    },
    navItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:12,
        paddingBottom:12,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'rgba(255,255,255,0.8)'
    },
    navText:{
        fontSize:15,
        color:'#fff',
        marginLeft:20
    },
    signOutButton:{
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'rgba(255,255,255,0.8)',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        padding:12,
        marginTop:15

    },
    signOutButtonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:13
    }
})