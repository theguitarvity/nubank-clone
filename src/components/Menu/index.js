import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Menu(){
    return (
        <ScrollView style={styles.scrollMain} 
        showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.code}>
                    <QRCode
                        value="http://awesome.link.qr"
                        backgroundColor="#fff"
                        color="#8B10AE"
                        size={80}                       
                        
                    />                    
                </View>
                <View style={styles.nav}>
                    <View style={styles.navItem}>
                        <Icon name="help-outline" size={20} color="#fff"/>
                        <Text style={styles.navText}>Me Ajuda</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Icon name="person-outline" size={20} color="#fff"/>
                        <Text style={styles.navText}>Perfil</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Icon name="credit-card" size={20} color="#fff"/>
                        <Text style={styles.navText}>Configurar Cartão</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Icon name="smartphone" size={20} color="#fff"/>
                        <Text style={styles.navText}>Configurações do APP</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.signOutButton} onPress={()=>{}}>
                    <Text style={styles.signOutButtonText}>
                        SAIR DO APP
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}