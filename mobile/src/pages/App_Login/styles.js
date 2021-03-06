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

  incident: {
    paddingTop: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    paddingLeft: 25,
    //marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
    paddingLeft: 25
  },

  contactBox: {
    paddingTop: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingBottom: 24,
    paddingLeft: 25,
    paddingRight: 25
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
  //
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
});