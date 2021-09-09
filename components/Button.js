import React, { useState } from 'react';
import {TouchableOpacity, Text, View } from 'react-native';
import colors from '../styles/colors';
import { styles } from '../styles/Styles';



const Button = () =>{

 return(
    
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.textButton}> teste4</Text>
        </TouchableOpacity>

    

  );
}


export default Button