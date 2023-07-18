import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import './loading.css';
import Apidata from './Apidata';

function App() {
  const[api,setApi] = useState([]);
  const[loading,setLoading] = useState(true);

  const getData = async () =>{
    try{
      const res = await fetch('https://emojihub.yurace.pro/api/all');
      const data = await res.json();
      //console.log(data);
  
      setApi(data);
      setLoading(false);
    }
   catch(err){
    console.log(err);
   }
  }

  useEffect(()=>{
    getData(); 
    //console.log(loading)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);

    if (loading) {
      return(
        <div className="loading-bar-container">
        <div className="loading-bar" />
      </div>
      )
    }

  return (
    <div className="App">
      <Apidata apilist={api} />
    </div>
  );
}

export default App;
