import { Layout, Text, List } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

const _renderItem = ({ item }) => {
    return <StudentCard {...item} />;
};

export default function StudentList() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://student-registry-back.herokuapp.com/students')
            .then(res => res.json())
            .then(json => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return <Layout>
        {
            isLoading ? <Text> ... Loading</Text> :
                <List data={data} renderItem={_renderItem} />
        }
    </Layout>;

}