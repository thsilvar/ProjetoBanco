import {StyleSheet} from 'react-native';
import colors from './colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderRadius:1,
        margin: 10,
        flexDirection:'row',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        margin:4,
        alignItems:'center'

    },
    genero:{
        borderColor:'black',
        opacity: 0.5,
        fontSize: 15,
        fontWeight: "bold",

    },
    label:{
        paddingRight:20,
        fontSize:20,
        padding: 2,
        marginVertical: 5,
        marginLeft:5,
        marginRight:10,

    },
    switch:{
        margin:4,

    },
    switchBox:{
        flex: 6,
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
    },
    button:{
      padding: 5,
        backgroundColor: colors.btn2,
        marginVertical: 2,
        marginLeft:2,
        borderRadius: 30,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: colors.white,

    },
    picker:{
        padding: 10,
        flex:1,
        marginVertical: 5,
        borderRadius: 2,
        marginLeft:10,
        marginRight:10,
        borderColor: colors.LightGray
    },
    slider:{
        padding: 2,
        flex:1,
        marginVertical: 5,
        marginLeft:5,
        marginRight:10,
    }

})
