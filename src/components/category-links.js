import React from 'react';
import CategoryLink from './category-link';

const CategoryLinks = () => (
    <p>
        Show:
        {' '}
        <CategoryLink category='all'>
            All
        </CategoryLink>
        {', '}
        <CategoryLink category='Politics'>
            Politics
        </CategoryLink>
        {', '}
        <CategoryLink category='News'>
            News
        </CategoryLink>
    </p>
);

export default CategoryLinks;
