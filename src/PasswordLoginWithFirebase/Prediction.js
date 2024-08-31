import React, { useState } from 'react';
import axios from 'axios';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import './Prediction.css'; 

function Prediction() {
    const history = useNavigate();

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "val");
            history('/');
        });
    };


    const [formData, setFormData] = useState({
        Gender: 'male',
        Age: '',
        Height: '',
        Weight: '',
        Duration: '',
        Heart_Rate: '',
        Body_Temp: ''
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/', formData);
            setResult(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="App">
            <h1>Calories Burnt Prediction</h1>
            <form onSubmit={handleSubmit}>
                <label>Gender:</label>
                <select name="Gender" value={formData.Gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />

                <label>Age:</label>
                <input type="number" name="Age" value={formData.Age} onChange={handleChange} /><br />

                <label>Height (cm):</label>
                <input type="number" name="Height" value={formData.Height} onChange={handleChange} /><br />

                <label>Weight (kg):</label>
                <input type="number" name="Weight" value={formData.Weight} onChange={handleChange} /><br />

                <label>Duration (min):</label>
                <input type="number" name="Duration" value={formData.Duration} onChange={handleChange} /><br />

                <label>Heart Rate (bpm):</label>
                <input type="number" name="Heart_Rate" value={formData.Heart_Rate} onChange={handleChange} /><br />

                <label>Body Temp (°C):</label>
                <input type="number" name="Body_Temp" value={formData.Body_Temp} onChange={handleChange} /><br />

                <button type="submit">Predict</button>
            </form>
            {result && <h2>Predicted Calories Burnt: {result}</h2>}
        </div>
    );
}

export default Prediction;
