import { Card, ListGroup } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HProfile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get("http://localhost:3001/hospital");
      setPosts(res.data);
    };
    setLoading(false);
    getRes();
  }, []);

  return (
    <>
      {loading && <h1>loading</h1>}
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
                    <ListGroup.Item>Name: {ele.name}</ListGroup.Item>
                    <ListGroup.Item>
                      Date Established: {ele.date_estb}
                    </ListGroup.Item>
                    <ListGroup.Item>Contact No: {ele.phone}</ListGroup.Item>
                    <ListGroup.Item>Email: {ele.email}</ListGroup.Item>
                    <ListGroup.Item>Website: {ele.website}</ListGroup.Item>
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
export default HProfile;
