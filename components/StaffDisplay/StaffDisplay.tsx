import React from 'react'
import Image from 'next/image'
import test from '../../public/images/test.jpg'
import StaffCard from '../../lib/StaffCard'

const StaffDisplay = () => {
    return (
        <div className='bg-zinc-100 w-full min-h-screen flex justify-center items-start'>
            <StaffCard name='Sebastian' job='CEO' image={test} mail='ceo@latamva.com.ar' />
            <StaffCard name='Francisco' job='WEB, RRPP' image={test} mail='web@latamva.com.ar' />
            <StaffCard name='Francisco' job='Tours y Eventos' image={test} mail='rrpp@latamva.com.ar' />
        </div>
    )
}

export default StaffDisplay
