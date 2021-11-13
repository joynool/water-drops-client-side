import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) =>
{
    const { user, admin, isLoading } = useAuth();
    console.log(user, admin)
    if (isLoading) {
        return (<div className="d-flex justify-content-center align-items-center py-5">
            <Spinner animation="border" variant="info" />
        </div>);
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;