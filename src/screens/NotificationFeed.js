import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import TextHeader from '../components/TextHeader'
import { COLORS, FONTS } from '../constants'
import { notiofeed } from '../models/Notification'

const NotificationFeed = ({navigation}) => {
  return (
    <View style={{ flex: 1,  backgroundColor: COLORS.white }}>
            <TextHeader
        title={"Feed"}
        rightIconName={"search"}
        rightIconName2={"more-vert"}
        navigation={navigation}
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <ScrollView>
        {notiofeed.map((item, index) => (
          <View key={index}>
            <View style={{ flexDirection: "row", margin: 16 }}>
              <Image source={item.image} style={{height:48,width:48,resizeMode:"stretch"}}></Image>
              <View style={{ marginLeft:12, marginRight:48  }}>
                <Text
                numberOfLines={1}
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: 12,
                    fontWeight: "400",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    marginTop: 4,
                  }}
                >
                  {item.discription}
                </Text>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 12,
                    fontWeight: "400",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginTop: 4,
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default NotificationFeed