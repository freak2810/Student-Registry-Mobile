import { Layout, Input, Radio, RadioGroup, Text, Button } from '@ui-kitten/components';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default function EditDetails(props) {

    const paramName = props.route.params.name || '';
    const paramRollNo = props.route.params.rollNo || '';
    const paramEmail = props.route.params.email || '';
    const paramPhone = props.route.params.phone || '';
    const paramYear = props.route.params.year || '';
    const paramBranch = props.route.params.branch || '';
    const paramGender = props.route.params.gender || '';

    const retrieveYearIndex = (year) => {
        if (year == '4') return 3;
        if (year == '3') return 2;
        if (year == '2') return 1;
        return 0;
    };

    const retrieveBranchIndex = (branch) => {
        if (branch == 'ECE') return 2;
        if (branch == 'IT') return 1;
        return 0;
    };

    const retriveGenderIndex = gender => gender == 'female' ? 1 : 0;

    const [name, setName] = useState(paramName);
    const [rollNo, setRollNo] = useState(paramRollNo);
    const [email, setEmail] = useState(paramEmail);
    const [phone, setPhone] = useState(paramPhone);

    const [yearIndex, setYearIndex] = React.useState(retrieveYearIndex(paramYear));
    const [branchIndex, setBranchIndex] = React.useState(retrieveBranchIndex(paramBranch));
    const [genderIndex, setGenderIndex] = React.useState(retriveGenderIndex(paramGender));


    const onChangeHandler = () => {

        const retrieveYear = (yearIndex) => {
            if (yearIndex == 3) return '4';
            if (yearIndex == 2) return '3';
            if (yearIndex == 1) return '2';
            return '1';
        };

        const retrieveBranch = (branchIndex) => {
            if (branchIndex == 2) return 'ECE';
            if (branchIndex == 1) return 'IT';
            return 'CSE';
        };

        const retrieveGender = genderIndex => genderIndex == 0 ? 'male' : 'female';

        const data = {
            name: name,
            rollNo: rollNo,
            email: email,
            phone: phone,
            year: retrieveYear(yearIndex),
            branch: retrieveBranch(branchIndex),
            gender: retrieveGender(genderIndex)
        };

        const method = props.route.params.rollNo ? 'PUT' : 'POST';
        const url = props.route.params.rollNo ?
            `https://student-registry-back.herokuapp.com/student/rollNo/${props.route.params.rollNo}` :
            'https://student-registry-back.herokuapp.com/student';

        // console.log(method);

        fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => props.navigation.navigate('Student List', {}))
            .catch(err => console.log(err));
    };

    const onDeletePressHandler = () => {
        fetch(
            `https://student-registry-back.herokuapp.com/student/rollNo/${props.route.params.rollNo}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => props.navigation.navigate('Student List', {
                rollNo: props.route.params.rollNo
            }))
            .catch(err => console.log(err));
    };

    return <ScrollView style={styles.container}>
        <Input
            style={styles.element}
            value={name}
            label='Name'
            placeholder={`Enter Student's Name`}
            onChangeText={nextValue => setName(nextValue)}
        />
        <Input
            style={styles.element}
            value={rollNo}
            label='Roll No'
            placeholder={`Enter Student's Roll No.`}
            caption='Should be in the form 2451-17-733-001'
            onChangeText={nextValue => setRollNo(nextValue)}
        />
        <Input
            style={[styles.element]}
            value={email}
            label='Email'
            placeholder={`Enter Student's E-mail Address`}
            onChangeText={nextValue => setEmail(nextValue)}
        />
        <Input
            style={[styles.element]}
            value={phone}
            label='Phone'
            placeholder={`Enter Student's Phone Number`}
            caption='Max Length of 10 digits'
            onChangeText={nextValue => setPhone(nextValue)}
        />
        <Layout style={[styles.element]}>
            <Text category='h6'> Select Student's year of education </Text>
            <RadioGroup
                selectedIndex={yearIndex}
                onChange={index => setYearIndex(index)}>
                <Radio>1st Year</Radio>
                <Radio>2nd Year</Radio>
                <Radio>3rd Year</Radio>
                <Radio>Final Year</Radio>
            </RadioGroup>
        </Layout>
        <Layout style={[styles.element]}>
            <Text category='h6'> Select Student's Branch </Text>
            <RadioGroup
                selectedIndex={branchIndex}
                onChange={index => setBranchIndex(index)}>
                <Radio>CSE</Radio>
                <Radio>IT</Radio>
                <Radio>ECE</Radio>
            </RadioGroup>
        </Layout>
        <Layout style={[styles.element]}>
            <Text category='h6'>Select Student's Gender</Text>
            <RadioGroup
                selectedIndex={genderIndex}
                onChange={index => setGenderIndex(index)}>
                <Radio>Male</Radio>
                <Radio>Female</Radio>
            </RadioGroup>
        </Layout>
        <Layout style={styles.buttons}>
            <Button
                style={styles.button}
                onPress={onChangeHandler}
            >
                {props.route.params.name ? 'Modify Details' : 'Add Details'}
            </Button>
            {
                props.route.params.name ?
                    <Button
                        onPress={onDeletePressHandler}
                        style={styles.button}
                        status='danger'>Delete Details</Button> : null
            }
        </Layout>

    </ScrollView>;
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
    },

    element: {
        marginVertical: 10
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },

});