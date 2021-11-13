import React, { useEffect, useState } from 'react';
import { Container, Table, CloseButton } from 'react-bootstrap';

const ManageAllProducts = () =>
{
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() =>
    {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
            {
                setAllProduct(data)
            });
    }, []);

    const handleDelete = id =>
    {
        const proceed = window.confirm('Are you sure, you want to DELETE the product?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>
                {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted the product');
                        const restProducts = allProduct.filter(product => product._id !== id);
                        setAllProduct(restProducts);
                    }
                })
        };
    };

    return (
        <Container className="bg-info rounded shadow my-5">
            <h2 className="fw-bold text-center pt-3">
                <u>All </u><span className="text-white"><u>Products</u></span><u> Management</u>
            </h2>
            <p className="fw-light fs-4 mt-3 text-center">Total Products: {allProduct.length}</p>
            <Table responsive>
                <thead className="text-center">
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Management</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        allProduct.map(product => <tr key={product._id} className="bg-light">
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <CloseButton onClick={() => handleDelete(product._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Product" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageAllProducts;