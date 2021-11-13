import React, { useEffect, useState } from 'react';
import { Badge, CloseButton, Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

/*------------------------------------------------------------------
        Implement My Order for filter data using user email
--------------------------------------------------------------------*/
const MyOrder = () =>
{
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    //load order data filtering using email
    useEffect(() =>
    {
        fetch(`https://guarded-gorge-39504.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
            .catch(error => console.log(error));
    }, [user.email]);

    //Delete order data handler
    const handleMyOrderDelete = id =>
    {
        const proceed = window.confirm('Are you sure, you want to DELETE the order?');
        if (proceed) {
            fetch(`https://guarded-gorge-39504.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data =>
                {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted the Order');
                        const restOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(restOrders);
                    };
                });
        };
    };

    //All order data display panel using table
    return (
        <Container className="bg-info rounded shadow my-5">
            <h2 className="fw-bold text-center pt-3">
                <u>My </u><span className="text-white"><u>Order</u></span>
            </h2>
            <p className="fw-light fs-4 mt-3 text-center">Total Order: {myOrders.length} Items</p>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Shipping Name</th>
                        <th>Shipping Email</th>
                        <th>Order Status</th>
                        <th>Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order => <tr key={order._id} className="bg-light">
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
                            <td className="text-center">
                                <CloseButton onClick={() => handleMyOrderDelete(order._id)} className="fs-5 bg-danger rounded-circle ms-2" title="Delete Order" />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrder;