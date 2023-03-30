import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PProfile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get("http://localhost:3001/patient");
      setPosts(res.data);
    };
    setLoading(false);
    getRes();
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          {posts.map((ele) => {
            if (ele._id === id) {
              return (
                <Card>
                  <Card.Header>
                    <h4>Personal Information</h4>
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span className="fw-bold">Name:</span>
                      {ele.name}
                    </ListGroup.Item>
                    <ListGroup.Item>Address: {ele.address}</ListGroup.Item>
                    <ListGroup.Item>Contact: {ele.phone}</ListGroup.Item>
                    <ListGroup.Item>
                      Emergency contact: {ele.phone}
                    </ListGroup.Item>
                    <ListGroup.Item>Email: {ele.email}</ListGroup.Item>
                    <ListGroup.Item>Blood group: {ele.blood}</ListGroup.Item>
                    <ListGroup.Item>Gender: {ele.gender}</ListGroup.Item>
                    <ListGroup.Item>Date of Birth: {ele.dob}</ListGroup.Item>
                  </ListGroup>
                </Card>
              );
            }
          })}
        </>
      )}
    </>
  );
};

export default PProfile;
