import React, { useEffect } from 'react';
import './UnderstandingCalories.css';

const UnderstandingCalories = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="calories-page">
      <h1>Understanding Calories: What You Need to Know</h1>
      
      <section className="section intro-section">
        <p>
          Calories are a fundamental part of our daily lives, but do you know exactly what they are and how they impact your body? This page breaks down everything you need to know about calories, from their definition to how they influence weight, energy, and overall health.
        </p>
      </section>

      <section className="section">
        <h2>What Are Calories?</h2>
        <p>
          Calories are units of energy. They measure the energy that food provides to our bodies. Whether you're eating a salad or a slice of pizza, the calories in that food are what fuel your daily activities—from breathing to running a marathon.
        </p>
      </section>

      <section className="section">
        <h2>How Calories Affect Your Body</h2>
        <p>
          The number of calories you consume directly affects your weight. Consuming more calories than your body needs leads to weight gain, while consuming fewer leads to weight loss. However, it’s not just about the number of calories—it’s also about the quality.
        </p>
      </section>

      <section className="section">
        <h2>Good Calories vs. Empty Calories</h2>
        <p>
          Not all calories are created equal. "Good" calories come from nutrient-rich foods like vegetables, fruits, whole grains, and lean proteins. "Empty" calories, on the other hand, come from foods with little to no nutritional value, like sugary drinks and junk food.
        </p>
      </section>

      <section className="section">
        <h2>Daily Caloric Needs</h2>
        <p>
          Your daily caloric needs depend on various factors, including age, gender, weight, height, and activity level. Use our calorie calculator to determine how many calories you should consume each day to maintain, lose, or gain weight.
        </p>
      </section>

      <section className="section">
        <h2>Calories and Exercise</h2>
        <p>
          Exercise plays a crucial role in balancing calories. Regular physical activity helps you burn excess calories and maintain a healthy weight. Different exercises burn calories at different rates—find out how your favorite workout stacks up!
        </p>
      </section>

      <section className="section">
        <h2>Calorie Myths and Facts</h2>
        <p>
          There’s a lot of misinformation about calories. Here we debunk common myths and set the record straight on how calories really work.
        </p>
      </section>

      <section className="section conclusion-section">
        <h2>Conclusion</h2>
        <p>
          Understanding calories is key to managing your health and fitness goals. By making informed choices about what and how much you eat, you can take control of your diet and live a healthier life.
        </p>
      </section>

      <section className="section call-to-action">
        <h2>Ready to Take Control?</h2>
        <p>
          Ready to take control of your calorie intake? Check out our <a href="#calorie-prediction-tool">Calorie Burnt Prediction Tool</a> to start tracking your progress today!
        </p>
      </section>
    </div>
  );
};

export default UnderstandingCalories;
