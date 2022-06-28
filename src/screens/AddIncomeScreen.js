import { StyleSheet, View, ScrollView, Button, Text, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import React, { useState, useContext } from 'react'
import dayjs from 'dayjs'
import * as Yup from 'yup';
import UserContext from "../components/UserContext";
import firestore from '@react-native-firebase/firestore';

const AddIncomeScreen = ({navigation}) => {
  const UserContext_ = useContext(UserContext)

  const CategoryList = [
    "Salaire et assimilé",
    "Revenu financier",
    "Rente",
    "Pension alimentaire",
    "Allocation chomage",
    "Prestations sociales",
    "Revenu foncier",
    "Revenu exceptionnel",
    "Autre revenu"
  ]

  const addIncomes = async ({ amount, date, category, comments }) => {
    await firestore().collection('Users').doc(UserContext_.user.uid).collection('incomes').add({
      amount: amount,
      date: date,
      category: category,
      comments: comments,
      user: UserContext_.user.uid,
      incomes: true
    }).then(() => {
      console.log('revenu ajouté');
    }).catch(error => {
      console.log(error);
    })
  }


  const validationIncomes = Yup.object().shape({
    amount: Yup
      .number("Montant invalide")
      .required("Mettre un montant"),
    date: Yup
      .date('Date invalide')
      .default(() => new Date()),
    category: Yup
      .string()
      .required("Selectionner une catégorie")
      .oneOf(CategoryList),
    comments: Yup
      .string("Commentaire invalide")
  })

  const initialValues = {
    amount: '',
    date: dayjs(new Date()).format('DD/MM/YYYY'),
    category: '',
    comments: ''
  }



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationIncomes}
      onSubmit={values => [navigation.navigate('Home', { values }), console.log(values)]}

    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
        <View style={styles.container}>
          <View style={styles.boxForm}>
            <View style={{ flex: 1 }}>

              <TextInput
                label="Montant"
                placeholder='Entrer le montant'
                style={styles.txtInput}
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
                keyboardType="number-pad"
                returnKeyType="next"
              />
              {errors.amount &&
                <Text style={styles.error}>{errors.amount}</Text>
              }

              <TextInput
                label="Date de déclaration"
                style={styles.txtInput}
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
                placeholder="JJ/MM/AAAA"
              />
              {errors.date &&
                <Text style={styles.error}>{errors.date}</Text>
              }


              <TextInput
                style={styles.dropDownStyle}
                onChangeText={handleChange('category')}
                onBlur={handleBlur('category')}

              />
              {errors.category &&
                <Text style={styles.error}>{errors.category}</Text>
              }

              <TextInput
                label="Commentaire"
                style={styles.txtComment}
                multiline={true}
                numberOfLines={4}
                onChangeText={handleChange('comments')}
                onBlur={handleBlur('comments')}
              />
              {errors.comments &&
                <Text style={styles.error}>{errors.comments}</Text>
              }


              <TouchableOpacity style={{ backgroundColor: '#9F8236', alignItems: 'center', marginVertical: 10, justifyContent: 'center', height: 50, borderRadius: 30 }} onPress={() => {
                handleSubmit()
                if (isValid) {
                  addIncomes(values)
                }
              }} title="Submit">
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Ajouter</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      )}
    </Formik>
  )

}

export default AddIncomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  boxForm: {
    flex: 2,
    marginVertical: 20,
    marginHorizontal: 15,
    color: 'white',
    justifyContent: 'center',
  },
  error: {
    fontSize: 15,
    color: 'red',
    textAlign: 'left',
    width: 300
  },
  txtInput: {
    borderColor: '#9F8236',
    fontSize: 17,
    height: 50,
    width: 300,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#2B6747',
    borderRadius: 10,
    color: '#838383',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5
  },
  txtComment: {
    borderColor: '#9F8236',
    fontSize: 17,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginTop: 5,
    backgroundColor: '#2B6747',
    borderRadius: 10,
    color: '#838383',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5
  },
  dropDownStyle: {
    borderColor: '#9F8236',
    paddingHorizontal: 5,
    borderWidth: 1,
    backgroundColor: '#2B6747',
    borderRadius: 8,
    color: '#FFF',
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
    elevation: 5,
    marginVertical: 10
  },
})