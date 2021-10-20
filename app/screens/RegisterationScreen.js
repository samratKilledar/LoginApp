

import React, { useState , useEffect} from 'react';
import { View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../component/HeaderComponent';
import styles from './styleSheet/LanguageScreenStylesheet';
import HeaderText from '../component/HeaderText';
import SubHeaderTextMsg from '../component/SubHeaderTextMsg';
import IconComponent from '../component/IconComponent';
import ButtonComponent from '../component/ButtonComponent'

const RegisterationScreen = (props) => {
    RegisterationScreen.propTypes = {
        navigation: PropTypes.object.isRequired,
      };
      const {
        navigation,
      } = props;
    const [firstTerm, setCheck] = useState(true);
    const [secondTerm, setCheckSecond] = useState(true);
    const [thirdTerm, setCheckThird] = useState(true);
    const [btnEnableDisable, checkBtnCondition] = useState(true);

    const selectUnselect =()=>{
         setCheck(firstTerm => !firstTerm)
    }

    const selectUnselectSecond=()=>{
        setCheckSecond(secondTerm => !secondTerm)
    }
    const selectUnselectThird=()=>{
        setCheckThird(thirdTerm => !thirdTerm)
    }
    const checkBtnConditionData=()=>{
        checkBtnCondition( btnEnableDisable=> !btnEnableDisable);
    }
    useEffect(()=>{
        if(!firstTerm && !secondTerm && !thirdTerm){
           checkBtnConditionData()
                    
        }
    })


  return (
    <View style={styles.mainContainer}>
        <View style={{flex:1}}>
            <HeaderComponent text="Registration" onClick={()=> navigation.goBack()} backArrowImgPath={require('../../assets/images/icon/backArrow/Arrow.png')}/>
        </View>

        <View style={{flex:2,alignItems:"center",justifyContent:"flex-end"}}>            
                <HeaderText text={`${"Terms & Conditions and Privacy Policy \n Welcome to PH Human!"}`}/>
        </View>   


        <View style={{flex:9}}>
            <View style={{alignItems:"center",justifyContent:"center",flex:1,}}>
                    <View style={{borderColor:"#979797",borderWidth:1,borderRadius:15,padding:20, width:"90%",height:"90%",alignItems:"center", justifyContent:"space-between"}}>
                      
                        {firstTerm?<IconComponent onClick={()=>selectUnselect()} width={30} height={30} path={require('../../assets/images/icon/unSelect/UNSELECT.png')}/>:
                            <IconComponent onClick={()=>selectUnselect()} width={30} height={30} path={require('../../assets/images/icon/select/SELECT.png')}/>
                        }
                        <SubHeaderTextMsg  fontSize={18} fontWeight="normal" text= {`${"I agree to Janssen’s privacy Policy"}`}/>
                        {secondTerm?<IconComponent onClick={()=>selectUnselectSecond()} width={30} height={30} path={require('../../assets/images/icon/unSelect/UNSELECT.png')}/>:
                        <IconComponent onClick={()=>selectUnselectSecond()} width={30} height={30} path={require('../../assets/images/icon/select/SELECT.png')}/>
                        }
                        <SubHeaderTextMsg fontSize={18} fontWeight="normal" text= {`${"I agree to help improve the service by \n sharing the data on how i use the \n service for aggregated analytics."}`}/>
                        {thirdTerm?<IconComponent onClick={()=>selectUnselectThird()} width={30} height={30} path={require('../../assets/images/icon/unSelect/UNSELECT.png')}/>:
                         <IconComponent onClick={()=>selectUnselectThird()} width={30} height={30} path={require('../../assets/images/icon/select/SELECT.png')}/>    
                        }
                        <SubHeaderTextMsg width={30} height={30} fontSize={18} fontWeight="normal" text= {`${"I agree to Avegen’s T&C and Privacy \n Policy"}`}/>

                    </View>
            </View>
        </View>    

        <View style={{flex:3,justifyContent:"flex-start",alignItems:"center"}}>
          <ButtonComponent text="Save" type="disable" />
        </View>   

    </View>
  );
};

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)((RegisterationScreen))