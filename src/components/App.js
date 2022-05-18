// create your App component here
import React ,{useState , useEffect} from 'react'

function App(){

  const[dogData, setDogData] = useState([])

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      setDogData(data)
    })

    if(dogData.length===0){
      return "Loading.."
    }
  },[])  

  const dogUrl = dogData.message

  function Loading(){
    return(<p>Loading...</p>)
  }

  

  return(
    <>
    My dog goes here
    {dogData.length===0?<Loading/>:<img src={dogUrl} alt="A Random Dog"></img>}
    
    
    </>
  )

}

export default App