import React from 'react'
import Image from 'next/image'
import test from '../../public/images/test.jpg'
import StaffCard from '../../lib/StaffCard'
import ceo from '../../public/images/staff/ceo.jpg'
import web from '../../public/images/staff/web.jpg'

const StaffDisplay = () => {
    return (
        <div className='bg-zinc-100 w-full min-h-screen flex justify-center items-start'>
            <StaffCard name='Sebastian' job='CEO' image={ceo} mail='ceo@latamva.com.ar' />
            <StaffCard name='Francisco' job='WEB, RRPP' image={web} mail='web@latamva.com.ar' />
            <StaffCard name='Francisco' job='Tours y Eventos' image={test} mail='rrpp@latamva.com.ar' />
        </div>
    )
}

export default StaffDisplay
