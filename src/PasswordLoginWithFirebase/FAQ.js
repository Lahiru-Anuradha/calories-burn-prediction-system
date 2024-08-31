import React from 'react';
import './FAQ.css';

const FAQ = () => {
onst faqs = [
    {
      question: "How accurate is the calorie burnt prediction?",
      answer: "Our calorie burnt prediction system uses advanced algorithms that consider various factors like workout type, duration, intensity, and personal details such as age and weight. While our system strives for accuracy, the predicted values are estimates and may vary from actual calories burned due to individual metabolic differences."
    },
    {
      question: "What information do I need to provide for an accurate prediction?",
      answer: "For the most accurate results, we recommend providing details such as the type of exercise, duration, intensity, age, weight, and gender. The more specific your inputs, the more tailored your prediction will be."
    },
    {
      question: "Can I use the prediction tool for any type of exercise?",
      answer: "Yes, our prediction tool supports a wide range of exercises, including running, cycling, swimming, weightlifting, yoga, and more. If your specific activity isn’t listed, you can select the closest match or choose a general category like 'Cardio' or 'Strength Training.'"
    },
    {
      question: "Is my personal data safe?",
      answer: "Absolutely. We take your privacy very seriously. All personal data is encrypted and stored securely. We do not share your information with third parties. For more details, please refer to our Privacy Policy."
    },
    {
      question: "Do I need to create an account to use the prediction tool?",
      answer: "No, you can use the calorie burnt prediction tool without creating an account. However, creating an account allows you to save your predictions, track your progress over time, and receive personalized tips and recommendations."
    },
    {
      question: "Can I save and track my calorie burn history?",
      answer: "Yes, if you create an account, you can save your predictions and access your calorie burn history. This feature helps you monitor your fitness progress and make informed adjustments to your routine."
    },
    {
      question: "I received a prediction that seems off. What should I do?",
      answer: "If a prediction seems inaccurate, please double-check the information you provided. Ensure that the exercise type, duration, and intensity are correctly entered. If the issue persists, feel free to contact our support team at support@calorieburnttracker.com."
    },
    {
      question: "Can I use the prediction tool on my mobile device?",
      answer: "Yes, our prediction tool is fully responsive and optimized for mobile devices, so you can easily use it on your smartphone or tablet."
    },
    {
      question: "How do I provide feedback or suggest a new feature?",
      answer: "We’d love to hear from you! Please use the Contact Us page to share your feedback or suggest new features. Your input helps us improve our service."
    },
    {
      question: "Is there a cost to use the calorie burnt prediction tool?",
      answer: "The basic version of our calorie burnt prediction tool is free to use. We also offer premium features and detailed analytics for a small subscription fee. Visit our Pricing page for more information."
    }
  ];

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;