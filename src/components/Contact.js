// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Create this file for contact-specific CSS

const Contact = () => (
    <div id="contact">
        <h1>Contact Me</h1>
        <form action="submit_form.php" method="post">
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" placeholder="Write your name here" required /><br /><br />
            <label htmlFor="phone">Phone:</label><br />
            <input type="tel" id="phone" name="phone" placeholder="Write your phone number here" required /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" placeholder="Write your email here" required /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
);

export default Contact;
