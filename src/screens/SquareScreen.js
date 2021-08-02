import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
  // state === { red:number, green:number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
      return { ...state, green: state.green + action.amount }
    case 'blue':
      return { ...state, blue: state.blue + action.amount }
    default:
      return
  }
}

const SquareScreen = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  })
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          width: 400,
          height: 150,
          backgroundColor: `rgb( ${red},${green},${blue} )`,
        }}
      />
      <Text>
        Square color: "rgb({red}, {green}, {blue})"
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
