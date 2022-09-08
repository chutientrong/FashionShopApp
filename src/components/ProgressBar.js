import { View, Text } from "react-native";
import React from "react";

import { COLORS } from "../constants";
import StepIcon from "./ProgressBar/StepIcon";
import Step from "./ProgressBar/Step";
import { stepDelivery } from "../models/Order";

const ProgressBar = ({}) => {
  return (
    <View style={{flex:1,marginTop:12,}}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* {stepDelivery.map((item,index)=>(
          <View key={index}>
            {index==1?<Step label={"Packing"} isComplete={true}isHideSlideEnd={true}></Step>:index==4? <Step label={"Success"} ></Step>:<Step label={"Shipping"}isComplete={true}></Step>}
          </View>
        ))} */}
        <Step label={"Packing"} isComplete={true}isHideSlideEnd={true}></Step>
        <Step label={"Shipping"}isComplete={true}></Step>
        <Step label={"Arriving"}isComplete={true}></Step>
        <Step label={"Success"} ></Step>
      </View>

    </View>
  );
};

export default ProgressBar;
