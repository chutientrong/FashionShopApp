import { View, Text } from 'react-native'
import React from 'react'
import { WIDTH } from '../constants';
import Svg, { G, Rect } from "react-native-svg";

const DashedLine = ({spacing,color}) => {

    const dashes = new Array(Math.floor(WIDTH/ spacing)).fill(null);
  return (
    <Svg height="11" width="100%">
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            x="0"
            y="10"
            width="10"
            height="1"
            fill={color}
            translateX={spacing * index}
          />
        ))}
      </G>
    </Svg>
  )
}

export default DashedLine