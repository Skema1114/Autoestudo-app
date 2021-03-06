import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    paddingTop: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    paddingLeft: 25
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
    paddingLeft: 25
  },
  
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingBottom: 30,
    paddingRight: 25
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },

  incidentProperty2: {
    backgroundColor: 'white',
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginBottom: 310,
    //marginTop: 24
  },

  actions2: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },

  //
  actions: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  action2: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
}); 