import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', text: ''});

    const addNewPost = (event) => {
        event.preventDefault();

        const newPost = {...post, id: Date.now()}
        create(newPost);
        setPost({title: '', text: ''});
    }

    return (
        <form className="kui-mb-20">
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder='Название'
            />
            <MyInput
                value={post.text}
                onChange={e => setPost({...post, text: e.target.value})}
                type="text"
                placeholder='Текст'
            />

            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;