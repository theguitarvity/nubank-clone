import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Tabs(){
    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}                 
                paddingLeft={10}
                paddingRight={10}
                horizontal={true}
                
            >
                <View style={styles.tabItem}>
                    <Icon name="person-add" size={24} color="#fff"/>
                    <Text style={styles.tabText}>Indicar amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color="#fff"/>
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color="#fff"/>
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color="#fff"/>
                    <Text style={styles.tabText}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="lock" size={24} color="#fff"/>
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </View>
    )
}