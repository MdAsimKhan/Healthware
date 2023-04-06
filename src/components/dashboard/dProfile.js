import { Card, ListGroup } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dprofile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getRes = async () => {
      const res = await axios.get("http://localhost:3001/doctor");
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
          {loading && <h1>loading</h1>}
          {!loading && (
            <>
              {posts.map((ele) => {
                if (ele._id === id) {
                  return (
                    <Card>
                      <Card.Header>
                        <h4 key={ele._id}>Personal Information</h4>
                      </Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Name: {ele.name}</ListGroup.Item>
                        <ListGroup.Item>Specialist: {null}</ListGroup.Item>
                        <ListGroup.Item>Contact: {ele.phone}</ListGroup.Item>
                        <ListGroup.Item>Email: {ele.email}</ListGroup.Item>
                        <ListGroup.Item>Gender: {ele.gender}</ListGroup.Item>
                        <ListGroup.Item>
                          Date of Birth: {ele.dob}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  );
                }
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Dprofile;
