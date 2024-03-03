import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tag = (props) => {
    return(
        <Badge bg={props.bg}>{props.raza}</Badge>
    )
}

export default Tag