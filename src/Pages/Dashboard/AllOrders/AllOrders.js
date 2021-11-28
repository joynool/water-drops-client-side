import React, { useEffect, useState } from 'react';
import { Badge, Button, CloseButton, Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';

/*------------------------------------------------------------
Implement All Orders with delete and status update to database
--------------------------------------------------------------*/
const AllOrders = () =>
{
    const [orders, setOrders] = useState([]);
    const [trigger, setTrigger] = useState(false);

    //Load all order data from database
    useEffect(() =>
    {
        fetch('https://guarded-gorge-39504.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error));
    }, [trigger]);

    //Pending/shipped update status handler
    const handleUpdateStatus = id =>
    {
        const statusUpdate = { orderStatus: 'shipped' };
        fetch(`https://guarded-gorge-39504.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(statusUpdate)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount > 0) {
                    swal("Thank you!", "Your Order shipped successfully to the delivery process!", "success");
                    setTrigger(true);
                };
            });
    };

    //Order delete handler
    const handleDelete = id =>
    {
        swal({
            title: "Are you sure, you want to DELETE the order?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) =>
            {
                if (willDelete) {
                    fetch(`https://guarded-gorge-39504.herokuapp.com/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data =>
                        {
                            if (data.deletedCount > 0) {
                                swal("Successfully Deleted the Order!", {
                                    icon: "success",
                                });
                                const restOrders = orders.filter(order => order._id !== id);
                                setOrders(restOrders);
                            }
                        })
                }
            });
    }

    return (
        <Container className="bg-info rounded shadow my-5">
            <h2 className="fw-bold text-center pt-3">
                <u>All </u><span className="text-white"><u>Orders</u></span>
            </h2>
            <p className="fw-light fs-4 mt-3 text-center">Total Order: {orders.length} Items</p>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Shipping Name</th>
                        <th>Shipping Email</th>
                        <th>Status</th>
                        <th>Management</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id} className="bg-light">
                            <td>{order.orderInfo.id}</td>
                            <td>{order.orderInfo.name}</td>
                            <td className="text-center">{order.orderInfo.quantity}</td>
                            <td className="text-center">$ {order.orderInfo.totalPrice}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td className="text-center">
                                {
                                    (order.orderStatus === 'pending') ? <Badge bg="warning" text="dark">
                                        Pending
                                    </Badge> : <Badge bg="success" text="light">
                                        Shipped
                                    </Badge>
                                }

                            </td>
                            <td className="d-flex justify-content-around align-items-center">
                                <Button onClick={() => handleUpdateStatus(order._id)} variant="outline-dark" size="sm">
                                    Shipped
                                </Button>
                                <CloseButton onClick={() => handleDelete(order._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Order" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default AllOrders;