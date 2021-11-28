import React from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import
{
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { RiDraftFill, RiShoppingBag3Fill, RiSettings5Fill, RiAdminFill, RiSecurePaymentFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';
import ReviewItem from '../../Home/Reviews/ReviewItem/ReviewItem';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';

/*------------------------------------------------------
Implement Dashboard for login user and also filter admin
--------------------------------------------------------*/
const Dashboard = () =>
{
    const { admin, logout } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <>
            <Row className="m-0 p-0 border-top border-bottom">
                <Col sm={2} className="bg-dark">
                    <Nav as={Link} to={`${url}`} style={{ textDecoration: 'none' }} className="text-light justify-content-center align-items-center border-bottom fs-4 py-3">
                        <AiOutlineDashboard />&nbsp;Dashboard
                    </Nav>
                    {
                        admin ? <Nav className="flex-column justify-content-center my-4">
                            <Link to={`${url}/all-orders`} className="mb-3">
                                <Button variant="dark">
                                    <RiDraftFill className="fs-5 text-light mx-2" />Manage All Orders
                                </Button>
                            </Link>
                            <Link to={`${url}/add-new-product`} className="mb-3">
                                <Button variant="dark">
                                    <RiShoppingBag3Fill className="fs-5 text-light mx-2" />Add New Product
                                </Button>
                            </Link>
                            <Link to={`${url}/manage-all-products`} className="mb-3">
                                <Button variant="dark">
                                    <RiSettings5Fill className="fs-5 text-light mx-2" />Manage All Products
                                </Button>
                            </Link>
                            <Link to={`${url}/make-admin`} className="mb-3">
                                <Button variant="dark">
                                    <RiAdminFill className="fs-5 text-light mx-2" />Make Admin
                                </Button>
                            </Link>
                        </Nav> : <Nav className="flex-column justify-content-center my-4">
                            <Link to={`${url}/payment`} className="mb-3">
                                <Button variant="dark">
                                    <RiSecurePaymentFill className="fs-5 text-light mx-2" />Payment
                                </Button>
                            </Link>
                            <Link to={`${url}/my-orders`} className="mb-3">
                                <Button variant="dark">
                                    <RiDraftFill className="fs-5 text-light mx-2" />My Orders
                                </Button>
                            </Link>
                            <Link to={`${url}/review-item`} className="mb-3">
                                <Button variant="dark">
                                    <FaComments className="fs-5 text-light mx-2" />Share Your Review
                                </Button>
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
                                    <u>Welcome to&nbsp;<span className="text-white fw-bold">Dashboard Panel</span></u>
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