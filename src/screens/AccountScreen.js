import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo';


import UserContext from '../components/UserContext';
import AccountComponent from '../components/AccountComponent';


const AccountScreen = (props) => {

    const UserContext_ = useContext(UserContext)

    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
                <View style={styles.dropDownStyle}>

                </View>
              
                <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10 }}>
                   <Text style={styles.txtSolde}>Solde : {UserContext_.solde} € <Entypo name="wallet" size={24} /></Text>
                </View>
            </View>


            <View style={styles.boxTransac}>
                <Text style={styles.txtTitleCol}>Débit - Total : - {UserContext_.expenses} €</Text>
                <Text style={styles.txtTitleCol}>Crédit - Total : {UserContext_.incomes} €</Text>
                {UserContext_.data_.sort((a,b) => new Date(b.date) - new Date(a.date)).map((item, index) => {
                    <View key={index}>
                <AccountComponent comments={item._data.comments}  name={item._data.category} category={item._data.category} date={item._data.date} montant={((typeof(item._data.incomes) == "undefined") ? -Number(item._data.amount) : Number(item._data.amount))} />
                </View>
})}
            </View>

        </View>
    )

}

export default AccountScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    containerSolde: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 8,
    },
    boxTransac: {
        flex: 2.20,
        marginHorizontal: 15,
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
        flex: 0.17,
    },
    lineLeft: {
        flex: 1.85,
        borderBottomWidth: 1,
        borderBottomColor: '#adabab',
        paddingBottom: 5
    },
    lineRight: {
        flex: 1.20,
        borderBottomWidth: 1,
        borderBottomColor: '#adabab',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 5
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
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginBottom: 10
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
        marginTop: 30,
        width: '50%',
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