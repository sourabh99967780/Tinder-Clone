import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {

    const [input, setInput] = useState('');
    const[messages, setMessages] = useState([
        {
            name: "Ellen",
            image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            message: "Whats up ?"
        },
        {
            name: "Ellen",
            image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            message: "How it's going!"
        },
        {
            message: "Hi! How are you Ellen"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">You matched with Ellen on 10/08/20</p>
            { messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <div>
                <form className="chatScreen__input">
                    <input 
                        value={input} onChange={(e) => setInput(e.target.value)} 
                        type="text" 
                        placeholder="Type a message..." 
                        className="chatScreen__inputField" />
                    <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen;
