/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import OikuraFooter from "./OikuraFooter";
export default function Group22(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="375px"
      height="593px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <OikuraFooter
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.OikuraFooter[0]")}
      >
        <Image
          position="absolute"
          top="0%"
          bottom="0%"
          height="100%"
          left="0%"
          right="0%"
          width="100%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.OikuraFooter[0].Image[0]")}
        ></Image>
      </OikuraFooter>
    </View>
  );
}
