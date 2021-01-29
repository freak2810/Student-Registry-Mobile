import { Layout, Button, List, Spinner, Text } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';
import { StyleSheet } from 'react-native';

export default function StudentList(props) {
    const _renderItem = ({ item }) => {
        return <StudentCard navigation={props.navigation} {...item} />;
    };

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://student-registry-back.herokuapp.com/students')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, [data]);

    if (props.route.params) {
        newData = data.filter(
            element => element.rollNo != props.route.params.rollNo
        );
    }

    return isLoading ? (
        <Layout style={styles.container}>
            <Spinner status='basic' size='giant' />
        </Layout>
    ) : (
            <Layout>
                <Button
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Student Details', {})}
                >
                    Add New Student Details
			</Button>
                {data.length < 1 ? (
                    <Text style={styles.container}>No Elements to Display</Text>
                ) : (
                        <List
                            style={styles.list}
                            data={data}
                            renderItem={_renderItem}
                            navigation={props.navigation}
                        />
                    )}
            </Layout>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    list: {
        paddingVertical: 10,
    },

    button: {
        margin: 10,
    },
});
