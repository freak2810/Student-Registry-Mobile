import { Layout, Input } from '@ui-kitten/components';
import React, { useState } from 'react';

export default function EditDetails() {

    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');

    return <Layout>
        <Input
            value={name}
            label="Name"
            placeholder={`Enter Student's name`}
            onChangeText={nextValue => setName(nextValue)}
        />
        <Input
            value={rollNo}
            label="Roll No"
            placeholder={`Enter Student's name`}
            caption='Should be in the form 2451-17-733-001'
            onChangeText={nextValue => setRollNo(nextValue)}
        />
    </Layout>;
};