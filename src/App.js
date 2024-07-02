import './App.css';
import QRcode from './image-qr-code.png';

function App() {
  return (
    <div className="App-background">
      <div className="container">
       
        
        <img src={QRcode} alt="QR Code" className="qr-code-image" />    
        <h2>Improve your front-end</h2> 
        <h2>skils by building project</h2>
        <p>Scan the  QR code to visit Frontend </p>
         <p> Mentor and take your coding skils to </p>
         <p>the next level</p>
        
      </div>
    </div>
  );
}

export default App;

