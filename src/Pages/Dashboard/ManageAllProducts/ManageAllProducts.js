import React, { useEffect, useState } from 'react';
import { Container, Table, CloseButton } from 'react-bootstrap';
import swal from 'sweetalert';

/*-----------------------------------------------------
Implement Load All product with delete functionality
-------------------------------------------------------*/
const ManageAllProducts = () =>
{
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() =>
    {
        fetch('https://guarded-gorge-39504.herokuapp.com/products')
            .then(res => res.json())
            .then(data =>
            {
                setAllProduct(data)
            });
    }, []);

    const handleDelete = id =>
    {
        swal({
            title: "Are you sure, you want to DELETE the product?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) =>
            {
                if (willDelete) {
                    fetch(`https://guarded-gorge-39504.herokuapp.com/products/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data =>
                        {
                            if (data.deletedCount > 0) {
                                swal("Successfully Deleted the product!", {
                                    icon: "success",
                                });
                                const restProducts = allProduct.filter(product => product._id !== id);
                                setAllProduct(restProducts);
                            }
                        });
                };
            });
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