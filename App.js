import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/views/home";
import CreateBill from "./src/views/bills/GenerateBills";
import Loginscreen from "./src/views/login/Loginscreen";
import AllInvoices from "./src/views/component/AllInvoices";
import Detailsscreen from "./src/views/login/Detailscreeen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Loginscreen">
        <Stack.Screen name="Loginscreen" component={Loginscreen} />
        <Stack.Screen name="Home" component={AllInvoices} />
        <Stack.Screen name="CreateBill" component={CreateBill} />
        <Stack.Screen name="Detailsscreen" component={Detailsscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
