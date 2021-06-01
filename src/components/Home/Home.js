import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import { CircularProgress } from '@material-ui/core';
import { Container } from 'react-bootstrap';


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-forest-37930.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container>
            <div className="d-flex justify-content-center">
                {
                    products.length === 0 && <CircularProgress />
                }
            </div>
            <div className="d-flex justify-content-center row p-3">
                {
                    products.map(product => <Products product={product}></Products>)
                }
            </div>
        </Container>
    );
};

export default Home;