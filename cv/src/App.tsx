
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
    position:string;
    experience: Experience[];
    education: string[];
  }
  
  const cvData: CvData = { 
    photo: "../public/avatar.jpg",
    name: 'Adam',
    lastName: 'Zegarek',
    position: 'Geodeta',
    experience: [{
      year: 2017,
      description:'Wyjazd zarobkowy do Holandi'
    },
    {
      year:2018,
      description: 'Wyjazd zarobkowy do Niemiec'
    },
    {
      year: 2019,
      description: 'Praca jako pomocnik stolarza'
    }
  ],
    education:['Szkoła średnia','Kurs Angielskiego na Etutor','Kurs Programowania MegaK'],  
  }

  return (
    <>
     <div className='container'>
      <h1 className='baner'>CV</h1>
      <div className='infoWImg__container'>
       <div className='img__container'>
        <img src={cvData.photo} alt="" />
       </div>
       <div className='info__container'>
        <span>Imię: <strong>{cvData.name}</strong></span>
        <span>Nazwisko: <strong>{cvData.lastName}</strong></span>
        <span>Stanowisko: <strong>{cvData.position}</strong></span>
       </div>
      </div>
      <ul className='list'>
        <h2 className='second__baner'>Doświadczenie zawodowe:</h2>
        {cvData.experience.map((exp)=>{
          
          return <li className='exp__item'> 
            <span className='exp__year'> * {exp.year}</span> - {exp.description} 
          </li>
        })}
      </ul>
      <ul className='list'>
        <h2 className='second__baner'>Edukacja:</h2>
        {cvData.education.map((edu)=>{
          
          return <li className='edu__item'> 
            * {edu}
          </li>
        })}
      </ul>
     </div>
    </>
  )
}

export default App
