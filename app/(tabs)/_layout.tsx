import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Home, Bookmark, User, Search } from 'lucide-react-native'

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
            width : "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 6
        },
        tabBarStyle: {
            backgroundColor: "#0f0D23",
            borderRadius: 50,
            position: "absolute",
            overflow: "hidden",
            marginHorizontal: 15,
            height: 52,
            marginBottom: 20
        }
    }}
    >
        <Tabs.Screen
        name="index"
        options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />
        }}
        />
        <Tabs.Screen
        name="saved"
        options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Bookmark color={color} size={size} />
        }}
        />
        <Tabs.Screen
        name="profile"
        options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />
        }}
        />
        <Tabs.Screen
        name="search"
        options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Search color={color} size={size} />
        }}
        />
    </Tabs>
  )
}

export default _layout