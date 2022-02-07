/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
import MagBody from "./MagBody";
export default function Group16(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="355px"
      height="106px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <MagBody
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.MagBody[0]")}
      >
        <Text
          fontFamily="Hiragino Kaku Gothic Std"
          fontSize="12px"
          fontWeight="400"
          color="rgba(33.00000183284283,33.00000183284283,33.00000183284283,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="44.339622641509436%"
          bottom="18.867924528301888%"
          left="38.309859154929576%"
          right="3.6619718309859155%"
          padding="0px 0px 0px 0px"
          children="「めんどくさい引っ越し」を「楽な引っ越し」に！その方法を解説"
          {...getOverrideProps(overrides, "View.MagBody[0].Text[0]")}
        ></Text>
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="3px SOLID rgba(222.00000196695328,222.00000196695328,222.00000196695328,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.MagBody[0].View[0]")}
        ></View>
        <Image
          position="absolute"
          top="4.716981132075472%"
          bottom="7.547169811320755%"
          height="87.73584905660377%"
          left="1.4084507042253522%"
          right="64.22535211267606%"
          width="34.36619718309859%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.MagBody[0].Image[0]")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="70px"
          height="19px"
          position="absolute"
          top="18px"
          left="136px"
          {...getOverrideProps(overrides, "View.MagBody[0].View[1]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,76.0000030696392,202.00000315904617,1)"
            {...getOverrideProps(overrides, "View.MagBody[0].View[1].View[0]")}
          ></View>
          <Text
            fontFamily="Hiragino Kaku Gothic Std"
            fontSize="11px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="12.890625px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            children="買取のコツ"
            {...getOverrideProps(overrides, "View.MagBody[0].View[1].Text[0]")}
          ></Text>
        </View>
      </MagBody>
    </View>
  );
}
