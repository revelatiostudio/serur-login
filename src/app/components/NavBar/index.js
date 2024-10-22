import React from 'react'
import './navbar.css'

import sophiaLogo from '../../assets/sophiaLogo.svg'
import Image from 'next/image'


export default function NavBar() {
    return (
        <section className='container-dash'>
            <header>
                <div className='header-dash'>
                    <p>v1.0</p>
                    <Image
                        src={sophiaLogo}
                        width={166}
                        height={44}
                        alt="sophia logo"
                    />
                    <p>avatar</p>
                </div>
            </header>

        </section>

    )
}
