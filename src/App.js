import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <div>
      {/*<Header />*/}
      {/*<Container />*/}
      <div className="welcomePage">
        <div className="orgName1">ORNAMAX</div>
        <div className="loader">
          <img src="https://static.wixstatic.com/media/198a64_e7d63cee330143028e80876a61bdcf71~mv2.gif" />
        </div>
        <div className="orgName2">WEB SOLUTIONS</div>
      </div>
    </div>
  );
}

export default App;
