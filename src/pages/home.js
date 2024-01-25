import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8080/react/api/v1/product/all");
        setProducts(result.data.DATA);
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && Array.isArray(products) && products.map((product, index) => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.name}</td>
                                <td>{product.company}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='btn btn-outline-dark btn-primary mx-2' >View</button>
                                    <Link className='btn btn-outline-dark btn-secondary mx-2' to={`editProduct/${product.productId}`}>Edit</Link>
                                    <button className='btn btn-outline-dark btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
