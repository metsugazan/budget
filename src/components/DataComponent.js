import React, { useState,useEffect,useContext } from "react";

import firestore from '@react-native-firebase/firestore';

const DataComponent = async() => {

    const expense__ = 0
    const incomes__ = 0
    const expenses__array = []
    const incomes__array = []
    const solde__ = 0

    await firestore()
    .collection('Users')
    .doc(id)
    .collection('expenses')
    .get()
    .then(documentSnapshot => {

        if (documentSnapshot != null) {

        expenses__array = documentSnapshot._docs

        for (let i = 0; i < documentSnapshot._docs.length; i++) {
            
            expense__ = expense__ + Number(documentSnapshot._docs[i].data().amount)
            
        }


        } else {
        console.log("Document inexistant");
        }

    })

    await firestore()
    .collection('Users')
    .doc(id)
    .collection('incomes')
    .get()
    .then(documentSnapshot => {

        if (documentSnapshot != null) {

        incomes__array = documentSnapshot._docs

        for (let i = 0; i < documentSnapshot._docs.length; i++) {
            
            incomes__ = incomes__ + Number(documentSnapshot._docs[i].data().amount)
            
        }
        } else {
        console.log("Document inexistant");
        }

    })

    solde__ = incomes__ - expense__

    return {expense__,incomes__,expenses__array,incomes__array,solde__}

}

export default DataComponent;

