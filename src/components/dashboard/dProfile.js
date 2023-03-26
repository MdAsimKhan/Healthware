import { Card, ListGroup } from 'react-bootstrap';
import React from 'react';


const Dprofile = ({ name, specialist, phone, hospital, education, email, gender, dob }) => {
    return ( 
        <>
         <Card>
            <Card.Header>
                <h4>Personal Information</h4>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Specialist: {specialist}</ListGroup.Item>
                <ListGroup.Item>Contact: {phone}</ListGroup.Item>
                <ListGroup.Item>Hospial: {hospital}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
                <ListGroup.Item>Education: {education}</ListGroup.Item>
                <ListGroup.Item>gender: {gender}</ListGroup.Item>
                <ListGroup.Item>Date of birth: {dob}</ListGroup.Item>

            </ListGroup>
        </Card>

        {/* <h1>hii</h1> */}
        </>
     );
}
 
export default Dprofile;