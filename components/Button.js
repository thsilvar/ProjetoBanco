import React, { useState } from 'react';
import {View } from 'react-native';
import colors from '../styles/colors';
import { styles } from '../styles/Styles';
import {Text , Button} from 'react-native-paper';


const ButtonMy = ({text, onPress }) =>{

 return(

        <Button
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{text}</Text>
        </Button>



  );
}


export default ButtonMy
