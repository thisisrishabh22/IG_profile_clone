import React , {useEffect} from 'react';
import top_logo from './img/top-logo.png';
import './App.css';
import Header from './components/Header';
import Main from './components/Main.js';

function App() {
  useEffect(()=>{
    document.title = "Rishabh Singh | Frontend Dev (@thefrontendrish) • Instagram photos and videos";
  })
  return (
   <>
   < Header logo = {top_logo} />
   < Main />
   </>
  );
}

export default App;
