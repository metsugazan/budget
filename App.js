

import React, {useState, useEffect} from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';

import UserContext from './src/components/UserContext';
import  auth from '@react-native-firebase/auth';

import DataComponent from './src/components/DataComponent';


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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [email_, setEmail_] = useState();
  const [password_, setPassword_] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [expenses, setexpenses] = useState(0)
  const [incomes, setincomes] = useState(0)
  const [solde,setSolde] = useState(0)
  const [expenses_array, setexpenses_array] = useState([])
  const [incomes_array, setincomes_array] = useState([])
  const [data_, setdata_] = useState([])


  await DataComponent (uid) {
    setexpenses(expense__)
    setincomes(incomes__)
    setSolde(solde__)
    setexpenses_array(expenses__array)
    setincomes_array(incomes__array)
    setdata_(data__)
  }



  function onAuthStateChanged(user) {
    setUser(user);
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
      console.log('Aucune connexion')
  }
  
  return (
    <PaperProvider theme={theme}>
      <UserContext.Provider value={{user,expenses, incomes, solde, expenses_array, incomes_array, data_,SetSolde_ }}>
      <AppNavigation />
      </UserContext.Provider>
        </PaperProvider>
  );
};

