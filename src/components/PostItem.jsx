import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    const noData = 'Нет данных';

    if (props.data.title === '') props.data.title = noData;
    if (props.data.text === '') props.data.text = noData;

    return (
        <section className='post kui-block kui-block-radiused kui-bg-gray kui-color-green kui-mb-20'>
            <div className="post-content">

                <h3 className="post-title">{props.number}. {props.data.title}</h3>
                <p className="post-text kui-text-paragraph">{props.data.text}</p>
            </div>

            <div className="post-footer">
                <MyButton onClick={() => props.remove(props.data)}>Удалить</MyButton>
            </div>
        </section>
    );
};

export default PostItem;