import { Dimensions, StyleSheet } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#111' ,
    paddingTop: 50, 
    paddingBottom: 60, 
  },
  pinGrid: {
    paddingHorizontal: 5,
    paddingTop: 10,
    justifyContent: 'center',
  },
  pinContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180, 
  },
  pinImage: {
    width: (screenWidth / 2) - 15,
    height: 180,
    borderRadius: 10,
  },
  navBar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    paddingVertical: 10,
    position: 'absolute',
    top: 10, 
    width: '100%',
    height: 70,
    zIndex: 1,
  },
  navBarBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    
  },
  navButtonText2: {
    color: '#fff',
    fontSize: 17,
    // marginTop: 44,
    paddingEnd: 0,

    paddingBlock: 5,
    
  
    
  },
  iconOptions:{
    position: 'relative',
    left: 70,
  }
});

export default style;
