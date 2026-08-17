import React, { Suspense, useState } from 'react';
import { fetchUsers, fetchPosts } from './api';

const User = React.lazy(() => import('./User'));
const Post = React.lazy(() => import('./Post'));

const createResource = (fetcher) => {
    let status = 'pending';
    let result;
    let suspender = fetcher().then(
        (res) => { status = 'success'; result = res; },
        (err) => { status = 'error'; result = err; }
    );
    return () => {
        if (status === 'pending') throw suspender;
        if (status === 'error') throw result;
        return result;
    };
};

const usersResource = createResource(fetchUsers);
const postsResource = createResource(fetchPosts);

const Exercise23 = () => {
    const [tab, setTab] = useState('home'); // Quản lý trạng thái hiển thị tab

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
                <span className="navbar-brand">Logo</span>
                <div>
                    <button 
                        onClick={() => setTab('home')} 
                        className="btn btn-link text-light text-decoration-none me-2"
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => setTab('posts')} 
                        className="btn btn-link text-light text-decoration-none"
                    >
                        Posts
                    </button>
                </div>
            </nav>

            <Suspense fallback={<div className="text-center mt-5"><h3>Loading...</h3></div>}>
                {tab === 'home' && <User usersPromise={usersResource} />}
                {tab === 'posts' && <Post postsPromise={postsResource} />}
            </Suspense>
        </div>
    );
};

export default Exercise23;