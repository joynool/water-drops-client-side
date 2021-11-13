
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

/*-----------------------------------------------------
Implement PrivateRoute to access feature for login user
-------------------------------------------------------*/
const PrivateRoute = ({ children, ...rest }) =>
{
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (<div className="d-flex justify-content-center align-items-center py-5">
            <Spinner animation="border" variant="info" />
        </div>);
    };

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;