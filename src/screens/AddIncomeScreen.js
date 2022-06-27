import { StyleSheet, View, ScrollView, Button, Text, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import * as yup from 'yup'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'






const AddIncomeScreen = () => {
  const [date, setDate] = useState(new Date())
  const [dateTimeShow, setDateTimeShow] = useState(false)
  const [categorie, setCategorie] = useState('')
  const [disabled, setDisabled] = useState(true)
  const fdate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
  const navigation = useNavigation()

  const categorieArray = ['']

  const checkCategorie = (value) => {
    if (!value) {
      setDisabled(true)
    } else {
      if (!categorieArray.includes(value)) {
        setDisabled(false)
    }
  }
    setCategorie(value)
  }

  return (
    <Formik
     
      initialValues={{ nom: '', prénom: '', montant: '', commentaire: ''}}
      onSubmit={values => navigation.navigate('Home',{values,date2: fdate,categorie: categorie})}
      
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <View style={styles.boxForm}>
              <View style={{ flex: 1 }}>
                <TextInput
                  label="Nom"
                  style={styles.txtInput}
                  placeholder='Entrer le nom du bénéficiaire'
                  onChangeText={handleChange('nom')}
                  onBlur={handleBlur('nom')}
                  returnKeyType="next"
                  value={values.nom}
                />
                
                <TextInput
                  label="Prénom"
                  style={styles.txtInput}
                  placeholder='Entrer le prénom dubénéficiaire'
                  onChangeText={handleChange('prénom')}
                  onBlur={handleBlur('prénom')}
                  returnKeyType="next"
                  value={values.prénom}
                />
                
                <TextInput
                  label="Date de déclaration"
                  style={styles.txtInput}
                  value={dayjs(date).format('DD-MM-YYYY')}
                  onChangeText={() => { }}
                  onBlur={() => { }}
                  onFocus={() => {
                    setDateTimeShow(true)
                  }}
                />
                {dateTimeShow && (
                  <DateTimePicker
                    mode="date"
                    value={new Date()}
                    is24Hour={true}
                    onChange={(event, date) => {
                      setDateTimeShow(false)
                      setDate(date)
                    }}
                  />
                )}
                <TextInput
                  label="Montant"
                  style={styles.txtInput}
                  placeholder='Entrer le montant'
                  onChangeText={handleChange('montant')}
                  onBlur={handleBlur('montant')}
                  returnKeyType="next"
                  value={values.montant}
                  keyboardType='numeric'
                />
               
                <View style={styles.dropDownStyle}>
                  <Picker
                    selectedValue={categorie}
                    style={{color: '#fff', placeholderTextColor: '#fff'}}
                    backgroundColor='#2B6747'
                    onValueChange={(itemValue, itemIndex) => {
                      checkCategorie(itemValue)

                    }}
                  >
                    <Picker.Item label="Catégorie" value="" />
                    <Picker.Item label="Alimentaires" value="Alimentaires" />
                    <Picker.Item label="Factures" value="Factures" />
                    <Picker.Item label="Transport" value="Transport" />
                    <Picker.Item label="Logement" value="Logement" />
                    <Picker.Item label="Santé" value="Santé" />
                    <Picker.Item label="Vacances" value="Vacances" />
                    <Picker.Item label="Shopping" value="Shopping" />
                    <Picker.Item label="Autre" value="Autre" />

                  </Picker>
                </View>
                


                <TextInput
                  label="Commentaire"
                  multiline={true}
                  numberOfLines={4}
                  style={styles.txtComment}
                  placeholder='Entrer un commentaire'
                  onChangeText={handleChange('commentaire')}
                  onBlur={handleBlur('commentaire')}
                  returnKeyType= 'done'
                  value={values.commentaire}
                />


                <TouchableOpacity style={{ backgroundColor: '#9F8236', alignItems: 'center', marginVertical: 10, justifyContent: 'center', height: 50, borderRadius: 30 }} disabled={disabled} onPress={handleSubmit} title="Submit">
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