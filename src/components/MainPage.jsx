import React from "react";
import '../styles/MainPage.css';

const MainPage = ({onStart}) => {
    return (
        <div className="mainPage">
            <div className="container">
                <h1>Welcome to the GPT arena</h1>
                <div className="navigation">
                    <button onClick={onStart}>Try It </button>
                    <a href='https://platform.openai.com/docs/api-reference'>Learn More</a>
                </div>
            </div>
            <img src='https://images.unsplash.com/photo-1498751041763-40284fe1eb66?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='fishing' />
        </div>
    )
}

export default MainPage;