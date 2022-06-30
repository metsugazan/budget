

import React, {useState, useEffect} from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';

import UserContext from './src/components/UserContext';
import  auth from '@react-native-firebase/auth';

import {GetData} from './src/components/GetData';


const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      primary: "#2E2E2E",
    },
  roundness: 10,
};

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [expenses, setexpenses] = useState(0)
  const [incomes, setincomes] = useState(0)
  const [solde,setSolde] = useState(0)
  const [expenses_array, setExpenses_array] = useState([])
  const [incomes_array, setIncomes_array] = useState([])
  const [data_, setdata_] = useState([])


  const SetSolde_ = async (uid) => {

    await GetData(uid).then(data => {
      setexpenses(data.expense__)
      setincomes(data.incomes__)
      setExpenses_array(data.expenses__array)
      setIncomes_array(data.incomes__array)
      setdata_(data.expenses__array.concat(data.incomes__array))
      setSolde(data.solde__)
    }).catch(error => {
      console.log("Error getting documents: ", error);
    })

  }


  function onAuthStateChanged(user) {
    setUser(user);
    if (user != null){
    SetSolde_(user.uid)
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {

    if (user != null){
      SetSolde_(user.uid)
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
      console.log('Deconnecter')
  }
  
  return (
    <PaperProvider theme={theme}>
      <UserContext.Provider value={{user,expenses, incomes, solde, expenses_array, incomes_array, data_,SetSolde_ }}>
      <AppNavigation />
      </UserContext.Provider>
        </PaperProvider>
  );
};

