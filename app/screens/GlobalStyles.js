import {StyleSheet} from 'react-native';
const globalStyles=StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    left:{
        flex:1,
        alignItems:'flex-start',
    },
    right:{
        flex:1,
        alignItems:'flex-end',
    },
    top:{
        flex:1,
        justifyContent:'flex-start'
    },
    bot:{
        flex:1,
        justifyContent:'flex-end'
    },
    bottomButton:{
        flex:1,
        justifyContent:'flex-end',
      }
});

export default globalStyles;