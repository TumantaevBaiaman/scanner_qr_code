import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const ScannerScreen = () => {

    const navigation = useNavigation();

    const [ hasPermission, setHasPermission] = useState(false)
    const [  scanData, setScanData ] = useState(String)

    useEffect(() => {
        (async() => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, [])

    if (!hasPermission){
        return (
            <View style={styles.container}>
                <Text>Please grant camera permissions to app.</Text>
            </View>
        )
    }

    const handleBarCodeScanned = ({type, data}) => {
        setScanData(data)
        navigation.navigate('Result', { data });
        console.log(`Data: ${data}`);
        console.log(`Type: ${type}`);
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner 
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
            />
            {scanData && <Button title="Scan Again?" onPress={() => setScanData(undefined)} />}
            <StatusBar style='auto' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
});

export default ScannerScreen;