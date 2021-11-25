import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export interface IItemRow {
    id: string;
    name: string;
    price: Number;
    productType: string;
}

interface IItemRowComponent extends IItemRow {
    onSelect: () => void;
    onDelete: () => void;
}

export const ItemRow: React.FC<IItemRowComponent> = (props) => {
    const rightSwipeActions = () => {
        return (
            <Pressable
                style={{
                    backgroundColor: 'lightyellow',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}
                onPress={props.onDelete}
                // onPress={() => console.log('deleting!!!')}
            >
                <Text
                    style={{
                        paddingHorizontal: 30,
                        paddingVertical: 20,
                    }}
                >
                    Delete
                </Text>
            </Pressable>
        );
    };

    return (
        <Swipeable
            renderRightActions={rightSwipeActions}
        >
            <Pressable style={[
                styles.itemRowContainer,
            ]}
                onPress={props.onSelect}
            >
                <View style={styles.titleRow}>
                    <Text style={styles.titleRowTextName}>{props.name}</Text>
                    <Text style={styles.titleRowTextType}>{props.productType}</Text>
                    <Text style={styles.titleRowTextPrice}>$ {props.price}</Text>
                </View>
            </Pressable>
        </Swipeable>
    )
}    

const styles = StyleSheet.create({
    itemRowContainer: {
        width: '100%',
        backgroundColor: '#eef0ee',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
    },
    titleRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 10,
    },
    titleRowTextType: {
        flex: 2,
        color: 'grey',
        fontSize: 14,
        fontWeight: '500',
    },
    titleRowTextPrice: {
        flex: 1,
        color: 'grey',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'right',
    },
    titleRowTextName: {
        flex: 2,
        color: 'grey',
        fontSize: 18,
        fontWeight: '500',
    },
});