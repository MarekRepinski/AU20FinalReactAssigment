import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FAB } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackedScreens } from '../helpers/types';
import { IItemRow, ItemRow } from '../components/ItemRow';

export const ItemScreen: React.FC<NativeStackScreenProps<StackedScreens, 'ItemScreen'>> = (props) => {
    const [items, setItems] = useState<IItemRow[]>(mockData);

    const render = ({ item }: { item: IItemRow }) => {
        return (
            <ItemRow
                id={item.id}
                name={item.name}
                productType={item.productType}
                price={item.price}
                onDelete={() => delItem(item.id)}
                onSelect={() => console.log(item.name)} />
        );
    };

    function delItem(id: string) {
        const data = items.filter((item) => 
        item.id != id).map(({id, name, productType, price}) => ({id, name, productType, price}));
        setItems(data);
    }

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
            {items.length < 1 &&
                <View style={styles.mainView}>
                    <Text style={styles.emptyText}>You do not have any products.</Text>
                    <Text style={styles.emptyText}>Press the green button below to</Text>
                </View>
            }
            {items.length > 0 &&
                <View style={{ padding: 1,}}>
                    <FlatList
                        style={{ paddingHorizontal: 5,}}
                        data={items}
                        renderItem={render}
                        keyExtractor={(item) => item.id!}
                    />
                </View>
            }
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => { props.navigation.navigate('EditItemScreen') }}
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


const mockData: IItemRow[] = [
    {
        id: '0',
        name: 'Stuff',
        productType: 'Integrated',
        price: 1999.99,
    },
    {
        id: '1',
        name: 'More Stuff',
        productType: 'Peripheral',
        price: 9.99,
    },
    {
        id: '2',
        name: 'An Item',
        productType: 'Integrated',
        price: 2199.99,
    },
    {
        id: '3',
        name: 'Another Item',
        productType: 'Peripheral',
        price: 599.99,
    },
    {
        id: '4',
        name: 'Thing',
        productType: 'Peripheral',
        price: 999.99,
    },
    {
        id: '5',
        name: 'A wierd Thing',
        productType: 'Peripheral',
        price: 29.99,
    },
];
