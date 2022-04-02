import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import PostItem from "./components/PostItem";
import './styles/ui-kit.min.css';
import './styles/app.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            text: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262).'
        },
        {
            id: 2,
            title: 'Python',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tempora.'
        },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title={'Языки и инструменты программирования'}/>
        </div>
    );
}

export default App;
