import React, { useState, useEffect, useRef } from 'react'; 
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//npm i react-native-freshchat-sdk
import { Freshchat, FreshchatConfig, FreshchatUser, FaqOptions} from 'react-native-freshchat-sdk';

const APP_ID = 'a02012ef-9524-4a7e-88f6-884ed5dbc4f2';//'f732404b-9b72-421c-973e-334559b7cbb3';//'ea1ee161-936d-4ff9-9c6e-0aa58391fb4e'
const APP_KEY = 'cbb1c7ed-8600-40a7-bf89-825aead004cb';//'544369bc-8ad5-4235-a72c-79fec512a380';//'edfb0d0e-a1db-43ed-8693-007b1d73a47a'
var freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
freshchatConfig.teamMemberInfoVisible = true;
freshchatConfig.cameraCaptureEnabled = true;
freshchatConfig.gallerySelectionEnabled = true;
freshchatConfig.responseExpectationEnabled = true;
Freshchat.init(freshchatConfig);

//Freshchat
var freshchatUser = new FreshchatUser();

freshchatUser.firstName = "Fernando";
freshchatUser.lastName = "Santos";
freshchatUser.email = "fernandowsantos@hotmail.com";
freshchatUser.phoneCountryCode = "+55";
freshchatUser.phone = "18996790901";
Freshchat.setUser(freshchatUser, (error) => {
  console.log(error);
});
/*
freshchatUser.firstName = "Astoufo";
freshchatUser.lastName = "Teste";
freshchatUser.email = "teste@hotmail.com";
freshchatUser.phoneCountryCode = "+55";
freshchatUser.phone = "";
*/


var userPropertiesJson = {
  "user_type": "Paid",
  "plan": "Gold"
}

var faqOptions = new FaqOptions();
faqOptions.tags = ["premium"];
faqOptions.filteredViewTitle = "Tags";
faqOptions.filterType = FaqOptions.FilterType.ARTICLE;

/*
Freshchat.identifyUser("EXTERNAL_ID", "RESTORE_ID", (error) => {
  console.log(error);
});

Freshchat.addEventListener(
  Freshchat.EVENT_USER_RESTORE_ID_GENERATED,
  () => {
      console.log("onRestoreIdUpdated triggered");
      Freshchat.getUser((user) => {
          var restoreId = user.restoreId;
          var externalId = user.externalId;
          console.log("externalId: " + externalId);
          console.log("restoreId: " + restoreId);
      })
  }
);*/

export default function App(){
  //Freshchat.getInstance(getApplicationContext()).setUser(freshchatUser);
  return (
  <View>
    <View>
      <TouchableOpacity onPress={()=>{Freshchat.showConversations();}}>
          <Text style={styles.productButton}>Perguntar</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity onPress={()=>{Freshchat.showFAQs(faqOptions);}}>
          <Text style={styles.productButton}>FAQ</Text>
      </TouchableOpacity>
    </View>
  </View>);
};

const styles = StyleSheet.create({
  screen:
  {
    marginTop: 0,
    marginBottom: (100),
  },
  scrollView: {
    backgroundColor: "#FFF",
  },
  header:{
    backgroundColor: "#DA552F",
    textAlign: "center",
    color: "#FFF",
    borderColor: "transparent"
  },
  input: {
    borderWidth: 1,
    margin:0,
    borderColor: "transparent",
    margin: 0,
    padding:0,
    paddingLeft:15,
    paddingRight:15,
    borderTopColor: "#FFF",
    backgroundColor: "#DA552F",
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#FFF",
  },
  productButton:{
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius:5,
    backgroundColor: "#DA552F",
    textAlign: "center",
    color: "#FFF",
    borderColor: "#FFF"
  },
  sectionContainer: {
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius:5,
    borderColor: "#DDD"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000",
  },
  sectionDeion: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color:  "#000",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color:  "#000",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

