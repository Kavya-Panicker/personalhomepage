import React from 'react';
import Navbar from './components/Navbar';
import WelcomeBanner from './components/WelcomeBanner';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ContactMe from './components/ContactMe';
import ChatBot from 'react-simple-chatbot';
import './index.css'; // Global CSS
const steps = [
    {
        id: '0',
        message: 'Hello! Welcome to my website. What’s your name?',
        trigger: '1',
    },
    {
        id: '1',
        user: true,
        trigger: '2',
    },
    {
        id: '2',
        message: "Nice to meet you, {previousValue}! How can I assist you today?",
        trigger: '3',
    },
    {
        id: '3',
        message: 'Would you like to know more about my dance journey or my B.Tech projects?',
        trigger: '4',
    },
    {
        id: '4',
        options: [
            { value: 'dance', label: 'Dance Journey' },
            { value: 'tech', label: 'B.Tech Projects' },
            { value: 'general', label: 'General Questions' },
        ],
        trigger: '5',
    },
    {
        id: '5',
        message: "You selected {previousValue}. What specifically would you like to know?",
        trigger: '6',
    },
    {
        id: '6',
        user: true,
        trigger: '7',
    },
    {
        id: '7',
        message: "Thank you for your question! Here’s a brief overview of {previousValue}:",
        trigger: '8',
    },
    {
        id: '8',
        message: "For more detailed information or further queries, feel free to contact me at +919737611429 or visit LinkedIn.",
        end: true,
    }
];


// Creating our own theme
const theme = {
    background: 'rgba(255, 255, 255, 0.5)', // Match the semi-transparent background
    fontFamily: 'cursive',
    headerBgColor: '#003366', // Dark blue color from your design
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#003366',
    botFontColor: '#fff',
    userBubbleColor: '#ffff99', // Light yellow from your design
    userFontColor: '#000',
};

// Config for chatbot
const config = {
    botAvatar: "chatbot.jpg",
    floating: false,
};

const App = () => (
  <div className="App">
    <Navbar />
    <WelcomeBanner />
    <div className="main-content-wrapper">
      <div className="side-images">
        <img src="40 Innovative Dancing women Drawings and sketches ideas.jpeg" alt="Circular " className="circular" />
        <img src="download (1).jpeg" alt="Star Image" className="star" />
        <img src="download.jpeg" alt="Star Image" className="star" />
      </div>
      <div className="wrapper">
        <img src="kavya4.jpg" alt="img" />
        <About />
      </div>
      <div className="side-images">
        <img src="download (2).jpeg" alt="Circular Image" className="circular" />
        <img src="Dancer's feet.jpeg" alt="Star Image" className="star" />
        <img src="Bharatanatyam Dance Art _ Dance Wall Art _ Ballerina Wall Art _ Indian Art _Classical Dance Girl _ Indian Traditional Canvas Art Print _Gift.jpeg" alt="Star Image" className="star" />
      </div>
    </div>
    <Gallery />
    <Contact />
    <ContactMe />

        <ChatBot steps={steps} {...config} 
        floating={true}
        botDelay={1000}
        />
      </div>
  
);

export default App;
