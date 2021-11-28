import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

/*---------------------------------------------------------
Implement add new product to database using react hook form
-----------------------------------------------------------*/
const AddNewProduct = () =>
{
    const { register, handleSubmit, reset } = useForm();

    //Create new service to database
    const onSubmit = data =>
    {
        fetch('https://guarded-gorge-39504.herokuapp.com/products', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    swal("Thank you!", "Successfully Added New Product!", "success");
                    reset();
                }
            });
    };

    return (
        <div className="container bg-info shadow rounded my-5 p-5">
            <h2 className="fw-bold text-center">
                <u>Add </u><span className="text-white"><u>New Products</u></span>
            </h2>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control {...register("name")} placeholder="Enter Product Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control {...register("description")} placeholder="Enter Product Description" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control {...register("price")} placeholder="Enter Product Price" type="number" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Image Link</Form.Label>
                        <Form.Control {...register("img")} defaultValue="https://i.ibb.co/ZcX4GRb/water-drops.png" required />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="shadow">
                        Add New Product
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default AddNewProduct;