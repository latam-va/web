import React from 'react'
import Image from 'next/image'
import test from '../../public/images/test.jpg'
import StaffCard from '../../lib/StaffCard'

const StaffDisplay = () => {
    return (
        <div className='bg-zinc-100 w-full min-h-screen flex justify-center items-start'>
            <StaffCard name='Sebastian' job='CEO' image={test} mail='#' />
            <StaffCard name='Francisco' job='WEB, RRPP' image={test} mail='#' />
            <StaffCard name='Francisco' job='Entrenamiento, Miembros' image={test} mail='#' />
        </div>
    )
}

export default StaffDisplay
