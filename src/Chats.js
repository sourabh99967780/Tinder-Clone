import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Hey! How are you ?"
                timestamp="35 minutes ago"
                profilePic="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
            <Chat
                name="Ellem"
                message="What's up ?"
                timestamp="55 minutes ago"
                profilePic="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
            <Chat
                name="Sandra"
                message="Ola!"
                timestamp="3 days ago"
                profilePic="https://cdn.pixabay.com/photo/2020/03/28/15/20/cat-4977436__340.jpg"
            />
            <Chat
                name="Natasha"
                message="Oops there is he is.... deer"
                timestamp="1 week ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUwSzn4_0_-rxxjalDIXuA7C6g-HbBIINLQ&usqp=CAU"
            />
        </div>
    )
}

export default Chats
