import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function Profile({ name, address, phone, phn, email, bg, gender, dob }) {
  return (
    <Card>
      <Card.Header>
        <h4>Personal Information</h4>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Name: {name}</ListGroup.Item>
        <ListGroup.Item>Address: {address}</ListGroup.Item>
        <ListGroup.Item>Contact: {phone}</ListGroup.Item>
        <ListGroup.Item>Emergency contact: {phn}</ListGroup.Item>
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>Blood group: {bg}</ListGroup.Item>
        <ListGroup.Item>Gender: {gender}</ListGroup.Item>
        <ListGroup.Item>Date of birth: {dob}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Profile;
