
import './App.css'

function App() {

  interface Experience{
    year: number;
    description:string; 
  }
  
  interface CvData{
    photo:string;
    name:string;
    lastName:string;
    experience: Experience[];
    education: string[];
  }


  return (
    <>
     <h1>Begin</h1>
    </>
  )
}

export default App
