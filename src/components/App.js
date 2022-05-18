// create your App component here
import React ,{useState , useEffect} from 'react'

function App(){

  const[dogData, setDogData] = useState([])

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      setDogData(data.message)
    })

   
  },[])  

  if(dogData.length===0){
    return(<p>Loading...</p>)
  }  

  return(
    <>
    My dog goes here
    <img src={dogData} alt="A Random Dog"></img>      
    </>
  )

}

export default App