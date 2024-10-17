import React from 'react';
import './dashboard.css';

import Image from 'next/image'

import sophiaLogo from '../assets/sophiaLogo.svg'
import frame from '../assets/frame-welcome.png'
import seta from '../assets/setap.svg'
import pen from '../assets/pen.svg'
import star from '../assets/star.svg'
import trash from '../assets/trash.svg'



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
                            style={{ cursor: "pointer", position: "absolute", right: "34px" }}
                            alt='seta' />

                    </div>
                    <p className='p1'>Uma plataforma do <strong>Serur</strong> para auxiliar na validação de processos, criada com <strong>inteligência artificial</strong> focada em precisão, eficiência e segurança. Durante este <br />
                        período de testes, você pode explorar nossas funcionalidades e acessar o <strong>tutorial</strong> para aprender como utilizar o Sophia de forma eficiente.</p>

                </div>

            </div>
            <div className='sec-dashboard'>
                <div className='dashboard'>
                    <div className='filter'>
                        <input type='text' placeholder="🔍 Analises Sophia" />
                        <button>+ Adicionar</button>

                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NÚMERO PROCESSO</th>
                                <th>DATA SUBMISSÃO</th>
                                <th>CLIENTE</th>
                                <th>NOTA SOPHIA</th>
                                <th>STATUS</th>
                                <th className='ac-thead'>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>12345678910</td>
                                <td>01/08/2024</td>
                                <td>Banco Pan S.A.</td>
                                <td className="low">30/100</td>
                                <td>Em Andamento</td>
                                <td className='actions'>
                                    <button><Image src={pen} width={18} height={18} alt='caneta' /></button>
                                    <button><Image src={star} width={18} height={18} alt='estrela' /></button>
                                    <button><Image src={trash} width={18} height={18} alt='lixo' /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>12345678910</td>
                                <td>01/08/2024</td>
                                <td>Banco Pan S.A.</td>
                                <td className="medium">70/100</td>
                                <td>Concluído</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>12345678910</td>
                                <td>01/08/2024</td>
                                <td>Banco Pan S.A.</td>
                                <td className="high">100/100</td>
                                <td>Erro</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>12345678910</td>
                                <td>01/08/2024</td>
                                <td>Banco Pan S.A.</td>
                                <td className="medium">72/100</td>
                                <td>Em Andamento</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>


            </div>


        </section>



    )
}
