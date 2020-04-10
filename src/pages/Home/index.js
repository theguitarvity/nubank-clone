import React from 'react'
import {View, Text, Animated} from  'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import styles from './styles'
import Header from '../../components/Header'
import Tabs from   '../../components/Tabs'
import Menu from   '../../components/Menu'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Home(){
    const translateY = new Animated.Value(0)
    const animatedEvent = Animated.event([
        {
            nativeEvent:{
                translationY: translateY
            }
        }
    ],{useNativeDriver:true})
    function onHandlerStateChanged(event){}
    return (
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.content}>
                <Menu />
                <PanGestureHandler 
                    onGestureEvent={() =>{}}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                <Animated.View style={[styles.card, {transform:[{
                    translateY:translateY
                }]}]}>
                    <View style={styles.cardHeader}>
                        <Icon name="attach-money" color="#666" size={28}/>
                        <Icon name="visibility-off" color="#666" size={28}/>
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardContentTitle}>
                            Saldo disponível
                        </Text>
                        <Text style={styles.cardContentDescription}>
                            R$ 197.611,65
                        </Text>
                    </View>
                    <View style={styles.cardFooter}>
                        <Text style={styles.cardFoooterAnnotation}>
                            Transferência de R$ 20,00 recebida de Josi Mota.
                        </Text>
                    </View>
                </Animated.View>
                </PanGestureHandler>
            </View>
            <Tabs></Tabs>
        </View>
    )
}