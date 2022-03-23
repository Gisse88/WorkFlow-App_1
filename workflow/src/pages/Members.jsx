import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { get, post } from '../api'
import MemberData from '../components/Members/MemberData';
import {MdEdit, MdDelete} from 'react-icons/md'
import ChangeRoleModal from '../components/Modal/ChangeRoleModal';

const Members = () => {
    const [myTeams, setMyTeams] = useState(); 
    const [editModalOpened,setEditModalOpened] = useState(false)
    const [idTeamEdit, setIdTeamedit] = useState("")

    const handleEdit = (id) =>{
      setIdTeamedit(id)
      setEditModalOpened(true)
    }
    const edit = (event) => {
      event.preventDefault()
      const {idTeam,idMember,newRole} = event.target
      const newData = {
          idTeam: idTeam.value,
          idMember: idMember.value,
          newRole: newRole.value
      }
      post("/teams/changeRole",newData)
      .then(res => {
        get("/teams")
        .then(res => setMyTeams(res.data))
        .catch(error => console.log(error))

      })
      .catch(error => console.log(error))
      setEditModalOpened(false);
    }

    useEffect(() => {
        get("/teams")
        .then(res => setMyTeams(res.data))
        .catch(error => console.log(error))
      },[])

  return (
    <div className='page h-screen flex'>
        <Sidebar/>
        <div className='flex-1 min-w-0 h-fit mt-2 rounded-r-md bg-color-bg-secondary px-9'>
          <h1 className='text-2xl font-bold py-4'>Mis colaboradores</h1>
          <hr></hr>
          {console.log(myTeams)}
          {myTeams&&

              myTeams.map((team) => (
                <div key={team._id} className='flex gap-3 flex-col border-2 border-color-border shadow-md my-4 p-3'>
                  <h2 className='text-lg font-semibold text-color-tertiary'>{team.name}</h2>
                  <p>Lider {team.idLeader.name}</p>
                  <p>{team.idLeader.email}</p>
                  <h3 className='font-bold'>Miembros</h3>
                  {team.members.map((member) => (
                    <div className='flex gap-3 mb-4'>
                      <MemberData key={member._id._id} member={member}/>
                      <div className='flex gap-3 ml-auto'>
                        <button onClick={()=>{handleEdit(team._id)}}><MdEdit className='text-color-btn w-6 h-6 hover:bg-white rounded-md'/></button>
                        {editModalOpened&&
                            <ChangeRoleModal setModalOpen={setEditModalOpened} change={edit} idTeam={idTeamEdit} idMember={member._id._id} name={member._id.name}/>
                        } 

                        <button><MdDelete className='text-color-tertiary w-6 h-6 rounded-md hover:bg-white '/></button>
                      </div>
                    </div>
                  ))}
                </div>
              ))   
          }
        </div>

  </div>
  )
}

export default Members