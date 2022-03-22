import React, { useEffect, useState } from 'react'
import MiniBoard from '../MiniBoard/MiniBoard'
import MainHeader from './Main_header'
import ProfilePic from '../ProfilePic/ProfilePic'

//modal 
import NewTeamModal from '../Modal/NewTeamModal'

//api
import { get, post } from '../../api'
//import { getTeams, addTeam } from "../../api/teams";


const Main = () => {
  const [myTeams, setMyTeams] = useState([])
  const [modalOpened,setModalOpened] = useState(false)
   
  const add = (event) => {
      event.preventDefault();
      const {name,img,description} = event.target
      const newTeam = {
        name:name.value,
        img:img.value,
        description:description.value
      }
      post("/teams",newTeam)
      .then(res => {
        setMyTeams([...myTeams,res.data]);
      })
      .catch(error => console.log(error))
      setModalOpened(false);
  }

  useEffect(() => {
    get("/teams")
    .then(res => setMyTeams([...myTeams, res.data]))
    .catch(error => console.log(error))
  },[])

  return (
    <div className='flex-1 min-w-0 h-fit mt-2 rounded-r-md bg-color-bg-secondary'>
        <MainHeader/>
        <div className='p-6'>
          <div className='flex justify-evenly'>
            <ProfilePic urlImg={'https://i.pinimg.com/736x/c0/f0/30/c0f0302707c98b3bb6698aa4e2b42aef.jpg'}/>
            <h2 className='text-color-text-h text-2xl text-center mb-2'>Equipos de trabajo</h2>
            <button onClick={()=>{setModalOpened(true)}} 
                            className='bg-gradient-to-r from-purple-700 to-blue-500 
                                    hover:from-purple-600 hover:to-blue-400 rounded-lg 
                                    px-2 text-white font-bold'>Agregar Equipo</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-10 rounded-md'>
            {
             myTeams.map((team) =>(
              <MiniBoard key={team._id} name={team.name} url={'/my-teams/'+team._id} description={team.description} cover={team.img}/>
             )
             )
            }

          </div>
  
        </div>
        {modalOpened&&
            <NewTeamModal setModalOpen={setModalOpened} addTeam={add}/>
      
        }
    </div>
  )
}

export default Main