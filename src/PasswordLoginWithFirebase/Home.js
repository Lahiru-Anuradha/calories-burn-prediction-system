import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Home(){
    const history = useNavigate();

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/');
        });
    };

    return (
        <>
            <Navbar /> 
            <div className="Container">
                <div className="home-container">
                    <div>
                        <button onClick={handleClick}>SignOut</button>
                    </div>
                    <div className="home-content">
                            <h1>Calories Burnt Disease Prediction System</h1>
                                <p>We provide advanced prediction models to assess the Calories Burnt.</p>
                            <div className="vision-mission">
                            <h2>Vision</h2>
                                <p>"To lead the way in health and fitness by leveraging advanced predictive technologies to accurately estimate calories burnt, empowering individuals to achieve their wellness goals and maintain a balanced lifestyle."</p>
                            <h2>Mission</h2>
                                <p>"Our mission is to transform the way people approach fitness and health by providing cutting-edge calorie burnt prediction models. By continuously innovating and collaborating with fitness experts, our goal is to offer precise insights that support effective workout planning and personalized fitness strategies. We aim to make a significant impact on individual health and well-being by enhancing the accuracy of calorie tracking and promoting healthier lifestyles."</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
