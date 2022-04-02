import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <section className='kui-mb-50'>
            <h1 className="kui-color-green kui-text-center">{title}</h1>

            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} data={post} key={post.id}/>
            )}
        </section>
    );
};

export default PostList;