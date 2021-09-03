import {StyleSheet} from 'react-native';

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
       
    },
    switch:{
        margin:4,
        
    },
    switchBox:{
        flex: 0.1,
        flexDirection:'row',
        justifyContent:'space-between',
    }

})