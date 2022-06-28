import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'

const TransactionComponent = (props) => {

    const { category, date, montant } = props

    let date_ = dayjs(date).locale('fr-FR').format('DD/MM/YYYY - HH:mm')

    return (
        <View style={styles.line}>
            <View style={styles.lineLeft}>
                <Text style={styles.titleLine}>{category}</Text>
                <Text style={{ color: '#adabab', textAlign: 'left', marginHorizontal: 10 }} >{date_}</Text>
            </View>
            <View style={styles.lineRight}>
                <Text style={{ fontWeight: 'bold', color: montant < 0 ? "red" : "green" }}>{montant < 0 && "-"}{montant > 0 && "+"} {Math.abs(montant)} €</Text>
            </View>
        </View>
    )
}

export default TransactionComponent


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