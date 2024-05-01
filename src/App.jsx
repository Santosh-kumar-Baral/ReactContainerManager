import React from 'react';
import ReactDOM from 'react-dom/client';
import MyDocker from './components/Card';
import mydata from "./Database";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App(){
const root = ReactDOM.createRoot(document.getElementById("root"));

function createCard(data) {
  return (
    <div >
      <MyDocker
        status={data.status}
        terminal={data.terminal}
        logoimage={data.logoimage}
      />
    </div>
  );
}

root.render(

  <div>
    <Navbar/>
    <div className='font-bold text-center text-6xl text-blue-800 underline'>
    <h1 >Container Manager</h1>
    </div>
    <div className='resize-x mx-3 md:container md:mx-auto my-5 rounded-xl p-5 min-h-[80vh] md:w-[35%]'>
    {mydata.map(createCard)}
    </div>

    <Footer/>
  </div>
)
}
export default App;
