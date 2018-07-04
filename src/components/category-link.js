import React from 'react';
import {NavLink} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const CategoryLink = ({category, children}) => (
    <NavLink
        exact
        to={category === 'all' ? '' : '/' + category}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}>
        {children}
    </NavLink>
);

CategoryLink.propTypes = {
    category: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default CategoryLink;