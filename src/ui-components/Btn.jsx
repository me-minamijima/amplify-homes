/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Btn(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Text[0]": {},
        "Flex.View[0].View[0]": {},
        "Flex.View[0].Icon[0]": {},
        "Flex.View[0]": {},
        Flex: {},
      },
      variantValues: { btn: "Default" },
    },
    {
      overrides: {
        "Flex.Text[0]": {},
        "Flex.View[0].View[0]": {},
        "Flex.View[0].Icon[0]": {},
        "Flex.View[0]": {},
        Flex: { opacity: "0.699999988079071" },
      },
      variantValues: { btn: "hover" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      borderRadius="40px"
      padding="10px 20px 10px 40px"
      backgroundColor="rgba(243.00000071525574,151.00000619888306,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Hiragino Kaku Gothic Std"
        fontSize="14px"
        fontWeight="400"
        color="rgba(33.00000183284283,33.00000183284283,33.00000183284283,1)"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children="買取実績をもっと見る"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <View
        width="13px"
        height="13px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.View[0].View[0]")}
        ></View>
        <Icon
          width="6px"
          height="11px"
          pathData="M0.675725 -0.737154C0.268606 -1.11035 -0.363962 -1.08284 -0.737154 -0.675725C-1.11035 -0.268606 -1.08284 0.363962 -0.675725 0.737154L0.675725 -0.737154ZM-0.675725 10.2628C-1.08284 10.636 -1.11035 11.2686 -0.737154 11.6757C-0.363962 12.0828 0.268606 12.1103 0.675725 11.7372L-0.675725 10.2628ZM-0.675725 0.737154L4.52011 5.5L5.87156 4.02569L0.675725 -0.737154L-0.675725 0.737154ZM4.52011 5.5L-0.675725 10.2628L0.675725 11.7372L5.87156 6.97431L4.52011 5.5ZM4.52011 5.5L4.52011 5.5L5.87156 6.97431C6.73629 6.18163 6.73629 4.81836 5.87156 4.02569L4.52011 5.5Z"
          viewBox={{ minX: 0, minY: 0, width: 6, height: 11 }}
          color="rgba(255,255,255,1)"
          position="absolute"
          top="7.6923076923076925%"
          bottom="7.6923076923076925%"
          left="30.76923076923077%"
          right="23.076923076923077%"
          transformOrigin="top left"
          transform="rotate(-3.5083548023555002e-15deg)"
          {...getOverrideProps(overrides, "Flex.View[0].Icon[0]")}
        ></Icon>
      </View>
    </Flex>
  );
}
