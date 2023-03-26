import { Card, ListGroup } from 'react-bootstrap';
import React from 'react';


const HProfile = ({ name, established, phone, specialization,  email,website}) => {
    return ( 
        <>
         <Card>
            <Card.Header>
                <h4>Personal Information</h4>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Date Established: {established}</ListGroup.Item>
                <ListGroup.Item>Contact No: {phone}</ListGroup.Item>
                <ListGroup.Item>Specialization {specialization}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
                <ListGroup.Item>Website: {website}</ListGroup.Item>

            </ListGroup>
        </Card>

        {/* <h1>hii</h1> */}
        </>
     );
}
 
export default HProfile;