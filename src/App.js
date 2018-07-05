// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>hello world</Text>
//                 <Text>Open up App.js to start working on your app!</Text>
//                 <Text>Changes you make will automatically reload.</Text>
//                 <Text>Shake your phone to open the developer menu.</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

import React from "react";
import dva from "./utils/dva";
import Router from "./Router";
import appMod from "./models/app";

const app=dva({
    models:[appMod],
    onError(e){
        console.log(e)
    }
})

const App=app.start(<Router/>)
export default App