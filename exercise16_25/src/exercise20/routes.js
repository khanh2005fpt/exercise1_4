import React from 'react';

export const routes = [
    {
        path: '/',
        component: () => <h1>Home Page</h1>,
        exact: true,
    },
    {
        path: '/products',
        component: () => <h1>Products Page</h1>,
    },
    {
        path: '/about',
        component: () => <h1>About Page</h1>,
    },
    {
        path: '/contact',
        component: () => <h1>Contact Page</h1>,
    },
    {
        path: '/users/:userId?',
        component: ({ params }) => (
            <h1>User Profile: {params.userId}</h1>
        ),
    },
];