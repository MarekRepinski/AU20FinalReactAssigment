import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FAB } from 'react-native-paper';

export const ItemScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Items</Text>
            </View>
            <View style={styles.titleRow}>
                <Text style={styles.titleRowText}>Name</Text>
                <Text style={styles.titleRowText}>Type</Text>
                <Text style={styles.titleRowText}>Price</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'grey', height: 2, flex: 1, alignSelf: 'center' }} />
            </View>
            <View style={styles.mainView}>
                <Text style={styles.emptyText}>You do not have any products.</Text>
                <Text style={styles.emptyText}>Press the green button below to</Text>
                <Text style={styles.emptyText}>add a new one.</Text>
            </View>
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topBar: {
        height: 70,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    topBarText: {
        color: '#fff',
        paddingLeft: 20,
        fontSize: 25,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    titleRowText: {
        fontSize: 18,
        fontWeight: '500',
    },
    scroll: {
        flex: 1,
    },
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
    },
    mainViewText: {
        fontSize: 20,
    },
    emptyText: {
        fontSize: 20,
        color: 'grey',
    },
    fab: {
        backgroundColor: 'green',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
