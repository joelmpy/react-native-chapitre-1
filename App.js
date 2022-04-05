import { View, StyleSheet, Text, ScrollView, Image, Pressable, Alert, ActivityIndicator} from "react-native";
import Loading from './component/loading'

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    fontSize: 60,
    textAlign: "center",
  },

  container2: {
    backgroundColor: "red",
    justifyContent : "center", 
    alignItems : "center", 
    display : 'flex',
  },

  texteSize: {
    fontSize: 30,
    backgroundColor: "blue",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
    backgroundColor: "yellow",
  },
  textGras: {
    textAlign: "center",
    backgroundColor: "green",
    fontWeight: "400",
    marginTop : 80,
    marginBottom : 80
  },
  image : {
    padding : 20, 
    margin : 20,
    height : 400,
    width : 600,
  }, 
  activityIndicator : {
       flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
  }
});

function App() {


  // const buttonAlert = () => {
  //   Alert.alert("c'est ici que sa charge")
  // }

// const alert = () => {
//   Alert.alert()
// }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.texteSize}>Bonjour a tous ici Joel</Text>
      <Text style={styles.textCenter}>Bonjour a tous ici Paris</Text>
      <Text style={styles.textGras}>Bonjour a tous ici Konexio</Text>
      <Image  source = {require('./image/onepiece.jpg')} 
      style = {styles.image}/>
       <Loading/> 
      </View>
    
</ScrollView>
  );
}

export default App;
