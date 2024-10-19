# Frontend Mentor - QR Code Component Challenge

This is my solution to the [Frontend Mentor](https://www.frontendmentor.io) **QR Code Component Challenge**. I completed this challenge as my 1st submission, showcasing my ability to create a simple and responsive component using **React.js**.

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)

## Overview

The **QR Code Component Challenge** involves building a QR code card component that closely resembles the provided design. This project focuses on practicing layout skills, responsive design, and React fundamentals.

### Screenshot

Here's a screenshot of the final design:

![QR Code Component Screenshot](./src/images/Screenshot%202024-10-17%20004802.png)

## My Process
## Links
https://github.com/Siphe23/Scan-bar-code.git
### Built With

- **React.js** for building the component
- Semantic HTML5 markup
- CSS custom properties
- Flexbox for layout
- Responsive design using media queries

### What I Learned

In this challenge, I enhanced my understanding of:
- Creating React components and managing their structure.
- Structuring HTML elements semantically for accessibility and clarity.
- Applying **CSS Flexbox** to create a centered layout that is responsive across different screen sizes.
- Using **media queries** to ensure the design adapts well on mobile and desktop screens.

Here’s a snippet of my main component in React:

```javascript
import './App.css';
import QRcode from './image-qr-code.png';

function App() {
  return (
    <div className="App-background">
      <div className="container">
        <img src={QRcode} alt="QR Code" className="qr-code-image" />    
        <h2>Improve your front-end</h2> 
        <h2>skills by building projects</h2>
        <p>Scan the QR code to visit Frontend</p>
        <p>Mentor and take your coding skills to</p>
        <p>the next level</p>
      </div>
    </div>
  );
}

export default App;
