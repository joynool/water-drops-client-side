import React from 'react';
import { Image } from 'react-bootstrap';
import fourOFour from './../../images/404.svg';

const NotFound = () =>
{
    return (
        <div className="mx-auto">
            <Image src={fourOFour} alt="page not found" fluid />
        </div>
    );
};

export default NotFound;