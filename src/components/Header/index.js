import React from 'react'
import { View, Image, Text } from 'react-native'
import Nubank_Logo from '../../assets/Nubank_Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image  source={Nubank_Logo}/>
                <Text style={styles.title}>Victor</Text>
            </View>
            
            <Icon name="keyboard-arrow-down" size={20} color="#fff"/>
        </View>
    )
}