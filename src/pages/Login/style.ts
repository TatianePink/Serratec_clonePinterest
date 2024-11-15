import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
  //   flex: 1,
    backgroundColor: '#111', 
  //   paddingTop: 0,
  },

  fundoContainer: {
    position: 'absolute',
    top: 260,
    left: 0,
    right: 0,
    height: 800, 
    backgroundColor: 'rgb(0, 0, 0)', 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    },
  pinGrid: {
    paddingHorizontal: 5,
    paddingTop: 10,
    justifyContent: 'center',
  },
  pinContainer: {
    flex: 1,
    margin: 0,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 190,
  },
  pinImage: {
    width: (screenWidth / 3) - 15,
    height: 180,
    borderRadius: 15,
  },
  loginContainer: {
    alignItems: 'center',
  
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 0,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#444',
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 20,
    color: '#fff',
  },
  buttonPrimary: {
    backgroundColor: '#E60023',
    width: '80%',
    height: 50,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonFacebook: {
    backgroundColor: '#1877F2',
    width: '80%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonFacebookText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonGoogle: {
    backgroundColor: '#444',
    width: '80%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGoogleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  termosText: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#1E90FF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: -350,
    marginBottom: 20,
    borderRadius:100,
  },
 
});

export default style;
