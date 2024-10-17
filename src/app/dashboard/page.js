import React from 'react';
import './dashboard.css';

import Image from 'next/image'

import sophiaLogo from '../assets/sophiaLogo.svg'
import frame from '../assets/frame-welcome.png'
import seta from '../assets/setap.svg'

export default function DashBoard() {
    return (
        <section className='container-dash'>
            <header className='header-dash'>
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
            <div className='welcome'>
                <h1>Olá, Zilda 👋</h1>

                <div className='text-wel'>
                    <div className='plat-sophia'>
                        <Image
                            src={frame}
                            width={54}
                            height={54}
                            alt='frame transparente' />
                        <p>Seja bem-vindo(a) à plataforma Sophia</p>
                        <Image
                            src={seta}
                            width={34}
                            height={34}
                            style={{cursor: "pointer", position: "absolute", right: "34px"}}
                            alt='seta' />

                    </div>
                    <p className='p1'>Uma plataforma do <strong>Serur</strong> para auxiliar na validação de processos, criada com <strong>inteligência artificial</strong> focada em precisão, eficiência e segurança. Durante este <br />
                        período de testes, você pode explorar nossas funcionalidades e acessar o <strong>tutorial</strong> para aprender como utilizar o Sophia de forma eficiente.</p>

                </div>

            </div>
        </section>



    )
}
