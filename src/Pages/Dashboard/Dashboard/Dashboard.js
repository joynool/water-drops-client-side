import React from 'react';
import { Tab, Row, Col, Nav, Fade, Button } from 'react-bootstrap';
import
{
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import useAuth from '../../../hooks/useAuth';
import ReviewItem from '../../Home/Reviews/ReviewItem/ReviewItem';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';

const Dashboard = () =>
{
    const { admin, logout } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <>
            <Row className="m-0 p-0">
                <Col sm={2} className="bg-dark">
                    <Nav as={Link} to={`${url}`} style={{ textDecoration: 'none' }} className="text-light justify-content-center align-items-center border-bottom fs-4 py-3">
                        <AiOutlineDashboard />&nbsp;Dashboard
                    </Nav>
                    {
                        admin ? <Nav className="flex-column justify-content-center align-items-center my-4">
                            <Link to={`${url}/all-orders`} className="mb-3">
                                <Button variant="dark">Manage All Orders</Button>
                            </Link>
                            <Link to={`${url}/add-new-product`} className="mb-3">
                                <Button variant="dark">Add New Product</Button>
                            </Link>
                            <Link to={`${url}/manage-all-products`} className="mb-3">
                                <Button variant="dark">Manage All Products</Button>
                            </Link>
                            <Link to={`${url}/make-admin`} className="mb-3">
                                <Button variant="dark">Make Admin</Button>
                            </Link>
                        </Nav> : <Nav className="flex-column justify-content-center align-items-center my-4">
                            <Link to={`${url}/payment`} className="mb-3">
                                <Button variant="dark">Payment</Button>
                            </Link>
                            <Link to={`${url}/my-orders`} className="mb-3">
                                <Button variant="dark">My Orders</Button>
                            </Link>
                            <Link to={`${url}/review-item`} className="mb-3">
                                <Button variant="dark">Share Your Review</Button>
                            </Link>
                        </Nav>
                    }
                    <Nav className="justify-content-center border-top py-4">
                        <Button onClick={logout} variant="outline-light" className="d-flex justify-content-center align-items-center">
                            <AiOutlineLogout />&nbsp;Logout
                        </Button>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <div>
                        <Switch>
                            <Route exact path={path}>
                                <h1 className="bg-info d-flex justify-content-center rounded shadow mt-5 p-5">
                                    <u>Welcome to&nbsp;</u><span className="text-white fw-bold"><u>Dashboard Panel</u></span>
                                </h1>
                            </Route>
                            <AdminRoute path={`${path}/all-orders`}>
                                <AllOrders />
                            </AdminRoute>
                            <AdminRoute path={`${path}/add-new-product`}>
                                <AddNewProduct />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-all-products`}>
                                <ManageAllProducts />
                            </AdminRoute>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin />
                            </AdminRoute>
                            <Route path={`${path}/payment`}>
                                <Payment />
                            </Route>
                            <Route path={`${path}/my-orders`}>
                                <MyOrder />
                            </Route>
                            <Route path={`${path}/review-item`}>
                                <ReviewItem />
                            </Route>
                        </Switch>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;