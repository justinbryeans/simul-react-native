import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  en: {
    username: 'Username',
    password: 'Password',
    register: 'Register',
    name: 'Name',
    location: 'Location',
    bio: 'Bio',
    contactInformation: 'Contact Information',
    skills: 'Skills',
    seeking: 'Seeking',
    resourceRequest: 'Resource Request',
  },
  ar: {
    username: 'اسم المستخدم',
    password: 'كلمه السر',
    register: 'تسجيل',
    name: 'اسم',
    location: 'موقع',
    bio: 'سيرة',
    contactInformation: 'معلومات الاتصال',
    skills: 'مهارات',
    seeking: 'فرص تسعى',
    resourceRequest: 'الموارد أريد',
  }
}

class Register extends Component{
  constructor() {
    super();

    this.state = {
      name: "",
      username: "",
      location: "",
      bio: "",
      preferred_contact: "",
      skills: "",
      seeking: "",
      resource_request: "",
      errors: [],
    }
  }

  async _onPressRegister(){
    try {
      let response = await fetch('http:///simulnos.herokuapp.com/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            name: this.state.name,
            username: this.state.username,
            location: this.state.location,
            bio: this.state.bio,
            preferred_contact: this.state.preferred_contact,
            skills: this.state.skills,
            seeking: this.state.seeking,
            resource_request: this.state.resource_request,
          }
        })
      });

      let res = await response.text();
      console.log("res is: " + res)
    } catch(errors){


    }
  }


  render() {

    return (
      <View style={styles.container}>

        <Text>Register with Simul today</Text>

        <TextInput
          onChangeText={ (val)=> this.setState({name: val}) }
          style={styles.input} placeholder={I18n.t("name")}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({username: val}) }
          style={styles.input} placeholder={I18n.t("username")}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({location: val}) }
          style={styles.input} placeholder={I18n.t("location")}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({bio: val}) }
          style={styles.input} placeholder={I18n.t("bio")}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({preferred_contact: val}) }
          style={styles.input} placeholder={I18n.t("contactInformation")}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({skills: val}) }
          style={styles.input} placeholder={I18n.t("skills")}
        />


        <TextInput
          onChangeText={ (val)=> this.setState({seeking: val}) }
          style={styles.input} placeholder={I18n.t("seeking")}
        />

        <TextInput
          onChangeText={ (val)=> this.setState({seeking: val}) }
          style={styles.input} placeholder={I18n.t("username")}
        />

        <TouchableHighlight onPress={this._onPressRegister.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
          Register
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
   fontSize: 20,
   alignSelf: 'center',
   margin: 40
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
  },
});

module.exports = Register;
