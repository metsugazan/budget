import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';




const HomeScreen = ({ navigation }) => {

    /*const [id, setId] = useState(data[0]._id)
    const [user, setUser] = useState(data[0].user)
    const [incomes, setIncomes] = useState(data[0].incomes)
    const [expenses, setExpenses] = useState(data[0].expenses)
    const [date, setDate] = useState(data[0].date)
    const [amount, setAmount] = useState(data[0].amount)
    const [category, setCategory] = useState(data[0].category)
    const [comments, setComments] = useState(data[0].comments)
    const [_id_income, set_id_income] = useState(data[0]._id_income)

    const contextValue = useContext(GlobalContext)
    //const [user, setUser] = useState(contextValue.user);
    const [userData, setUserData] = useState(data[contextValue.index])



    const totalIncome = incomes.map(item => item.amount.replace('€', '').replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    const totalExpenses = expenses.map(item => item.amount.replace('€', '').replace(',', '')).reduce((acc, item) => parseFloat(acc) + parseFloat(item), 0).toFixed(2)
    const totalBalance = (parseFloat(totalIncome) - parseFloat(totalExpenses)).toFixed(2)*/


    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
                <View style={{ flexDirection: 'row' }}>
                      { /* <Picker
                            selectedValue={id}
                            onValueChange={(itemValue, itemIndex) => {
                                setId(itemValue)
                                setUser(selectId(itemValue).user)
                                setIncomes(selectId(itemValue).incomes)
                                setExpenses(selectId(itemValue).expenses)
                                setDate(selectId(itemValue).date)
                                setAmount(selectId(itemValue).amount)
                                setCategory(selectId(itemValue).category)
                            }}>
                            {data.map(item => <Picker.Item label={item.user} value={item._id} key={item._id} />)}
                        </Picker>*/}


                    <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 10 }}>
                        <Text style={styles.txtSolde}>NAME</Text>
                        <Text style={styles.txtSolde}>Solde : TOTAL € <Entypo name="wallet" size={24} /></Text>
                    </View>
                </View>
            </View>
            
            <Text style={styles.txtSolde}>Dernières transactions</Text>       
            <View style={styles.boxTransac}>
                <Text style={styles.txtTitleCol}>Débit</Text>
                <ScrollView>
                        <View style={styles.line}>
                            <View style={styles.lineLeft}>
                                <Text style={styles.titleLine} >CATEGORIE</Text>
                                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >DATE</Text>
                            </View>
                            <View style={styles.lineRight}>
                                <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >- AMOUNT €</Text>
                            </View>
                        </View>
                </ScrollView>
                <Text style={styles.txtTitleCol}>Crédit</Text>
                <ScrollView>
                        <View style={styles.line}>
                            <View style={styles.lineLeft}>
                                <Text style={styles.titleLine} >CATEGORIE</Text>
                                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >DATE</Text>
                            </View>
                            <View style={styles.lineRight}>
                                <Text style={{ color: '#EEF1F1', textAlign: 'right', marginHorizontal: 10, fontSize: 20 }} >AMOUNT €</Text>
                            </View>
                        </View>
                </ScrollView>
            </View>




           {/* <View style={{ flex: 0.75, flexDirection: 'row' }}>
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
                    </View> */}
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