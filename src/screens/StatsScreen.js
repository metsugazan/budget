import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { VictoryPie } from 'victory-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import UserContext from '../components/UserContext';

const StatsScreen = (props) => {

    const UserContext_ = useContext(UserContext)

    return (
        <View style={styles.container}>
            <View style={styles.containerSolde}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center', marginLeft: 10, justifyContent: 'center' }}>
                        <Text style={styles.txtSolde}>Statistiques dépenses et revenus</Text>
                    </View>
                    <TouchableOpacity onPress={() => { onLogout() }} ><MaterialCommunityIcons name='logout' size={40} style={{ color: 'white', marginRight:10 }} /></TouchableOpacity>

                </View>
            </View>

            <View style={styles.boxPie}>
                <ScrollView>
                    <Text style={styles.txtSolde}>Dépenses</Text>
                    <VictoryPie
                        colorScale={["#d62828", "orange", "#2B6747", "#bb3e03", "navy", "#2B6747", "gold", "#222222", "#d62828", "#bb3e03"]}
                        labelPosition={({ index }) => index
                            ? "centroid"
                            : "startAngle"
                        }

                        startAngle={65}
                        endAngle={450}
                        labelRadius={({ innerRadius }) => innerRadius + 55}
                        /*style={{ labels: { fontSize: 15, fontWeight: 'bold', fill: 'white' } }} x={(data) =>  data.category + '\n' + data.amount} y={(data) => data.amount} data={expenses}*/ />

                    <Text style={styles.txtSolde}>Revenus</Text>
                    <VictoryPie
                        colorScale={["#d62828", "orange", "#2B6747", "#bb3e03", "navy", "#2B6747", "gold", "#222222", "#d62828", "#bb3e03"]}
                        labelPosition={({ index }) => index
                            ? "centroid"
                            : "startAngle"
                        }
                        startAngle={55}
                        endAngle={450}
                        labelRadius={({ innerRadius }) => innerRadius + 55}
                        /*style={{ labels: {fontSize: 15, fontWeight: 'bold', fill: 'white' } }} x={(data) => data.category + '\n' + data.amount} y={(data) => data.amount} data={incomes}*/ />
                </ScrollView>
            </View>

        </View>
    )

}

export default StatsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0A'
    },
    containerSolde: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B6747',
        marginBottom: 8,
    },
    boxPie: {
        flex: 2.00,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSolde: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    },
    dropDownStyle: {
        marginTop: 5,
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