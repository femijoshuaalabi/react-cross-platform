import React from 'react';
import { isReadyRef, navigationRef } from '@theplurg/core/components/utils/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import { config } from './config';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomePage } from '../pages/LandingPage';

const Stack = createNativeStackNavigator();

export default function Routes() {
    //Create a linking Object to pass to Navigation Container
    const linking = {
        prefixes: ['http://localhost:19006'],
        config,
    };

    React.useEffect(() => {
        return () => (isReadyRef.current = false);
    }, []);

    return (
        <NavigationContainer
            linking={linking}
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    stackAnimation: 'slide_from_right',
                }}
            >
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
