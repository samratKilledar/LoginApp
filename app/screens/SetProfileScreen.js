

import React, { useState , useEffect} from 'react';
import { View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../component/HeaderComponent';
import styles from './styleSheet/LanguageScreenStylesheet';
import HeaderText from '../component/HeaderText';
import ButtonComponent from '../component/ButtonComponent'
import SubHeaderTextMsg from '../component/SubHeaderTextMsg';

const SetProfileScreen = (props) => {
    SetProfileScreen.PropTypes = {
        navigation: PropTypes.object.isRequired,
      };
      const {
        navigation,
      } = props;
   
  
    

  return (
    <View style={styles.mainContainer}>
        <View style={{flex:1}}>
            <HeaderComponent text="Registration" onClick={()=> navigation.goBack()} backArrowImgPath={require('../../assets/images/icon/backArrow/Arrow.png')}/>
        </View>

        <View style={{flex:2,alignItems:"center",justifyContent:"flex-end"}}>            
                <SubHeaderTextMsg  fontSize={18} fontWeight="normal" text= {`${"1 of 8"}`}/>
        </View>   
        <View style={{flex:2,alignItems:"center",justifyContent:"flex-end"}}>            
                <HeaderText text={`${"Set your Profile"}`}/>
        </View>  
        <View style={{flex:2,alignItems:"center",justifyContent:"flex-end"}}>            
                <SubHeaderTextMsg  fontSize={14} fontWeight="normal" text= {`${"Set your Profile"}`}/>
        </View>   

        <View style={{flex:9}}>
           
        </View>    

        <View style={{flex:3,justifyContent:"flex-start",alignItems:"center"}}>
          {btnEnableDisable ? <ButtonComponent text="Save" type="enable" /> :
          <ButtonComponent onStartShouldSetResponder ={openSetProfileType} text="Save" type="disable" />
          }
        </View>   

    </View>
  );
};

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)((SetProfileScreen))