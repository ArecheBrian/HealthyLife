import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignInScreen } from "../Screens/SignInScreen";
import { HomeScreen } from "../Screens/HomeScreen";


const TestNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen 
                options={{ headerShown: false }}
                name="SignIn"
                component={SignInScreen}
            />
             <Stack.Screen 
                options={{ headerShown: false }}
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export const HealthyLife = () => {
    return (
      <NavigationContainer>
        <TestNavigation/>
      </NavigationContainer>
    );
  };