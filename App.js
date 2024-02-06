import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleLineIcons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Backup from './Screens/Backup';
import Categories from './Screens/Categories';
import Contact from './Screens/Contact';
import Customize from './Screens/Customize';
import GetPremium from './Screens/GetPremium';
import Home from './Screens/Home';
import RateApp from './Screens/RateApp';
import Settings from './Screens/Settings';
import Timer from './Screens/Timer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            fontWeight: "bold",
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name='Home'
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
          name='Timer'
          options={{
            drawerLabel: "Timer",
            title: "Timer",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            )
          }}
          component={Timer}
        />

        <Drawer.Screen
          name='Categories'
          options={{
            drawerLabel: "Categories",
            title: "Categories",
            drawerIcon: () => (
              <MaterialIcons name="categories" size={20} color="#808080" />
            )
          }}
          component={Categories}
        />

        <Drawer.Screen
          name='Customize'
          options={{
            drawerLabel: "Customize",
            title: "Customize",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            )
          }}
          component={Customize}
        />

        <Drawer.Screen
          name='Settings'
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Settings}
        />

        <Drawer.Screen
          name='Backup'
          options={{
            drawerLabel: "Backup",
            title: "Backup",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            )
          }}
          component={Backup}
        />

        <Drawer.Screen
          name='Rate this App'
          options={{
            drawerLabel: "Rate this App",
            title: "Rate this App",
            drawerIcon: () => (
              <FontAwesome name="star" size={20} color="#808080" />
            )
          }}
          component={RateApp}
        />

        <Drawer.Screen
          name='Contact'
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            )
          }}
          component={Contact}
        />





      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
