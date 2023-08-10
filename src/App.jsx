import { puppyList } from './data'
import { useState } from 'react'
import './App.css'


function App() {
 const [puppies, setPuppies] = useState(puppyList);
 const [featPupId, setFeatPupId] = useState(null);
 const featuredPup = puppies.find((pup)=> pup.id === featPupId);
//  {()=>{console.log("puppy id: ", puppy.id)}}
 console.log(featuredPup);
// console.log(puppies);
// console.log("puppyList: ", puppyList);
// console.log(featPupId.name)
  return (
   
    <div className="App">
      <div className="title"><h1>Puppy Pals</h1></div>
        

        {
          puppies.map((puppy)=>{
              return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }


        { 
          featPupId && (
            <div className="puppyInfo"> 
                <h2 className="puppyName">{featuredPup.name}</h2>
                    <ul className="list">
                        <li>Age: {featuredPup.age}</li>
                        <li>Email: {featuredPup.email}</li>
                    </ul>
            </div>
          )
        }

    </div>
  )
}

export default App