import { Card, ListGroup } from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// const data = {name : ele.name ,specialist,phone : ele.phone ,hospital,email: ele.email,education,gender,dob: ele.dob}


// {name,specialist,phone,hospital,email,education,gender,dob}

const Dprofile = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const getRes = async () => {
            const res = await axios.get('http://localhost:3001/doctor')
            setPosts(res.data)
        }
        setLoading(false)
        getRes()
    }, [])

    return (

        <>
            {loading && <h1>loading</h1>}
            {!loading && <>
                {posts.map(ele => {
                    if (ele._id === id) {
                        return (


                            <Card >
                                <Card.Header>
                                    <h4 key={ele._id} >Personal Information</h4>
                                </Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item  >Name: {ele.name}</ListGroup.Item>
                                    <ListGroup.Item>Specialist: {null}</ListGroup.Item>
                                    <ListGroup.Item >Contact: {ele.phone}</ListGroup.Item>
                                    <ListGroup.Item>Hospial: {null}</ListGroup.Item>
                                    <ListGroup.Item >Email: {ele.email}</ListGroup.Item>
                                    <ListGroup.Item>Education: {null}</ListGroup.Item>
                                    <ListGroup.Item>gender: {null}</ListGroup.Item>
                                    <ListGroup.Item>Date of birth: {ele.dob}</ListGroup.Item>

                                </ListGroup>
                            </Card>


                        )
                    }

                })}
            </>}
        </>
    )


}







export default Dprofile;



