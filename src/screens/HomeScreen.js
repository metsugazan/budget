import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import UserContext from "../components/UserContext";
import TransacComponent from "../components/TransacComponent";
import  auth from '@react-native-firebase/auth';



const HomeScreen = ({ navigation }) => {

    const UserContext_ = useContext(UserContext)



      const onLogout = () => {
        auth().signOut().then(function() {
          console.log("Sign-out successful.");
        }).catch(function(error) {
          console.log("An error happened when signing out");
        });
        navigation.navigate('login')
      }

    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{ flex: 1, alignItems: 'center', marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={styles.txtSolde}>Bonjour {UserContext_.user.email.split("@")[0]} !</Text>
                    <Text style={styles.txtSolde}>Votre solde est de : {UserContext_.solde.toFixed(2)} € <Entypo name="wallet" size={24} /></Text>
                </View>
                <TouchableOpacity onPress={() => {onLogout()}} ><MaterialCommunityIcons name='logout' size={40} style={{ color: 'white', marginRight:10}} /></TouchableOpacity>

                </View>
            </View>

            <Text style={styles.txtSolde}>Dernières transactions</Text>
            <View style={styles.boxTransac}>
                <Text style={styles.txtTitleCol}>Débit</Text>
                <ScrollView>
                    {UserContext_.expenses_array.slice(0,3).map((item, index) => (
                        <View key={index}>
                            <TransacComponent category={item._data.category} date={item._data.date} montant={((typeof (item._data.incomes) == "undefined") ? -Number(item._data.amount) : Number(item._data.amount))} />
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.txtTitleCol}>Crédit</Text>
                <ScrollView>
                    {UserContext_.incomes_array.slice(0,3).map((item, index) => (
                        <View key={index}>
                            <TransacComponent category={item._data.category} date={item._data.date} montant={((typeof (item._data.incomes) == "undefined") ? -Number(item._data.amount) : Number(item._data.amount))} />
                        </View>
                    ))}
                </ScrollView>
            </View>


            <View style={{ flex: 0.75, flexDirection: 'row' }}>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Revenus')}>
                        <MaterialCommunityIcons name="plus-circle" style={{ color: '#9F8236' }} size={52} />
                        <Text style={{ color: '#adabab', fontWeight: 'bold' }}>Ajout revenus</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Depenses')}>
                        <MaterialCommunityIcons name="plus-circle" style={{ color: '#9F8236' }} size={52} />
                        <Text style={{ color: '#adabab', fontWeight: 'bold' }}>Ajout dépenses</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    containerSolde: {
        flex: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 8,
    },
    boxTransac: {
        flex: 2.5,
        marginHorizontal: 15
    },
    txtTitleCol: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#EEF1F1",
        textAlign: 'center',
        marginVertical: 5
    },
    line: {
        flexDirection: 'row',
        flex: 0.19,
        marginBottom: 10
    },
    lineLeft: {
        flex: 1.85,
        borderBottomWidth: 1,
        borderBottomColor: '#adabab',
        paddingBottom: 10
    },
    lineRight: {
        flex: 1.20,
        borderBottomWidth: 1,
        borderBottomColor: '#adabab',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 10
    },
    titleLine: {
        color: '#EEF1F1',
        textAlign: 'left',
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtSolde: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    containerBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    btn: {
        alignItems: 'center'
    },
    dropDownStyle: {
        width: '50%',
        flex: 0.85,
        borderColor: '#838383',
        paddingHorizontal: 5,
        backgroundColor: '#adabab',
        borderRadius: 10,
        color: '#838383',
        height: 35,
        textAlign: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5
    },
});