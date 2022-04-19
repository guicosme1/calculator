import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#1A1A1A',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#D1D1D1'
    }
})

export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}
                numberOfLines={1}>{props.value}</Text>
        </View>
    )
}