import "./App.css";
import img from "./assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <main className="main">
        <div className="card">
          <img src={img} alt="" />
          <h1>Jessica Randall</h1>
          <h2>London, United Kingdom</h2>
          <p>"Front-end developer and avid reader."</p>
          <div className="btn-container">
            <button className="btn">GitHub</button>
            <button className="btn">Frontend Mentor</button>
            <button className="btn">LinkedIn</button>
            <button className="btn">Twitter</button>
            <button className="btn">Instagram</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
