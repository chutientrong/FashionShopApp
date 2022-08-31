import { COLORS } from "../constants";
import colors from "../constants/colors";

export const  DefaultNavOptions= {

    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? COLORS.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : COLORS.primary
}