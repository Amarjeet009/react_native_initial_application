import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { floor } from 'react-native-reanimated';

const ListScreen = () => {
    const msg = 'List Screent';
    const listData = [
        {
            id: 1,
            title: "quidem molestiae enim"
        },
        {
            id: 2,
            title: "sunt qui excepturi placeat culpa"
        },
        {
            id: 3,
            title: "omnis laborum odio"
        },
        {
            id: 4,
            title: "non esse culpa molestiae omnis sed optio"
        },
        {
            id: 5,
            title: "eaque aut omnis a"
        },
        {
            id: 6,
            title: "natus impedit quibusdam illo est"
        },
        {
            id: 7,
            title: "quibusdam autem aliquid et et quia"
        },
        {
            id: 8,
            title: "qui fuga est a eum"
        },
        {
            id: 9,
            title: "saepe unde necessitatibus rem"
        },
        {
            id: 10,
            title: "distinctio laborum qui"
        },
        {
            id: 11,
            title: "quam nostrum impedit mollitia quod et dolor"
        },
        {
            id: 12,
            title: "consequatur autem doloribus natus consectetur"
        },
        {
            id: 13,
            title: "ab rerum non rerum consequatur ut ea unde"
        },
        {
            id: 14,
            title: "ducimus molestias eos animi atque nihil"
        },
        {
            id: 15,
            title: "ut pariatur rerum ipsum natus repellendus praesentium"
        },
        {
            id: 16,
            title: "voluptatem aut maxime inventore autem magnam atque repellat"
        },
        {
            id: 17,
            title: "aut minima voluptatem ut velit"
        },
        {
            id: 18,
            title: "nesciunt quia et doloremque"
        },
        {
            id: 19,
            title: "velit pariatur quaerat similique libero omnis quia"
        },
        {
            id: 20,
            title: "voluptas rerum iure ut enim"
        },
        {
            id: 21,
            title: "repudiandae voluptatem optio est consequatur rem in temporibus et"
        },
        {
            id: 22,
            title: "et rem non provident vel ut"
        },
        {
            id: 23,
            title: "incidunt quisquam hic adipisci sequi"
        },
        {
            id: 24,
            title: "dolores ut et facere placeat"
        },
        {
            id: 25,
            title: "vero maxime id possimus sunt neque et consequatur"
        },
        {
            id: 26,
            title: "quibusdam saepe ipsa vel harum"
        },
        {
            id: 27,
            title: "id non nostrum expedita"
        },
        {
            id: 28,
            title: "omnis neque exercitationem sed dolor atque maxime aut cum"
        },
        {
            id: 29,
            title: "inventore ut quasi magnam itaque est fugit"
        },
        {
            id: 30,
            title: "tempora assumenda et similique odit distinctio error"
        },
        {
            id: 31,
            title: "adipisci laborum fuga laboriosam"
        },
        {
            id: 32,
            title: "reiciendis dolores a ut qui debitis non quo labore"
        },
        {
            id: 33,
            title: "iste eos nostrum"
        },
        {
            id: 34,
            title: "cumque voluptatibus rerum architecto blanditiis"
        },
        {
            id: 35,
            title: "et impedit nisi quae magni necessitatibus sed aut pariatur"
        },
        {
            id: 36,
            title: "nihil cupiditate voluptate neque"
        },
        {
            id: 37,
            title: "est placeat dicta ut nisi rerum iste"
        },
        {
            id: 38,
            title: "unde a sequi id"
        },
        {
            id: 39,
            title: "ratione porro illum labore eum aperiam sed"
        },
        {
            id: 40,
            title: "voluptas neque et sint aut quo odit"
        }
    ]
    return (
        <FlatList style={listStyle.container}
            showsVerticalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={listdata => listdata.id.toString()}
            data={listData} renderItem={({ item }) => {
                return <Text style={item.id % 2 == 0 ? listStyle.successStyle : listStyle.warningStyle}>{item.id.toString()} : {item.title}</Text>
            }}>
        </FlatList>
    )
};

const listStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        position: 'absolute',
        margin: 16,
        right: 10
    },
    successStyle: {
        fontSize: 30,
        color: '#34495E',
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#145A32",
        borderRadius: 6,
        backgroundColor: "#28B463",
        textAlign: "center",
        fontWeight: "normal"
    },
    warningStyle: {
        fontSize: 30,
        color: '#34495E',
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#9C640C",
        borderRadius: 6,
        backgroundColor: "#F39C12",
        textAlign: "center",
        fontWeight: "normal"
    }
});


export default ListScreen;