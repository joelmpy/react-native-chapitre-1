import {Text, StyleSheet, View, ActivityIndicator, Pressable} from 'react-native'
import { useState } from 'react'

const stylex = StyleSheet.create ({
    title : {
        backgroundColor : "white"
    }
})


function Loading () {
    const [loading, setLoading] = useState(false)
    
    const charger = () => {
        if(loading){
            setLoading (false)
        }
        else{
            setLoading(true)
        }
    }
        return ( 
        <View>
            <Text style = {stylex.title} >Salut ici loading </Text>
            {
                loading?
                <ActivityIndicator/>:
                null
            }
            <Pressable onPress={charger}>
                <Text>Va la bas</Text>
            </Pressable>       
            </View>
    )
}
export default Loading