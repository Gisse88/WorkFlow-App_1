import React from 'react'
import {FaWindowClose} from 'react-icons/fa'
import Button from '../Buttons/Button'

const NewTeamModal = ({setModalOpen, addTeam}) => {
  return (
    <div>
        <div className='absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-30' onClick={()=>{setModalOpen(false)}}></div>
        <div className="bg-white text-color-text-h w-2/4 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
            <Button className='absolute right-5 top-5 px-2'
                     onClick={()=>{setModalOpen(false)}}><FaWindowClose className='w-8 h-8'/></Button>
            <h2 className='p-5 text-3xl font-bold'>Create a new team</h2>
            <form className='flex flex-col p-5' onSubmit={addTeam}>
                <input className='p-4 outline-none border focus:border-color-tertiary my-5 rounded-md' name='name' placeholder='Name...' type="text" required/>
                <input className='p-4 outline-none border focus:border-color-tertiary my-5 rounded-md' name='img' placeholder='Image...' type="text" />
                <input className='p-4 outline-none border focus:border-color-tertiary my-5 rounded-md' name='description' placeholder='Description...' type="text" required/>
                <Button>Crear equipo</Button>
            </form>
 
        </div>
    </div>

  )
}

export default NewTeamModal