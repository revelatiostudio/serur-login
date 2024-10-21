'use client'
import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Cookies from 'js-cookie'

import { jwtDecode } from "jwt-decode";


import Image from 'next/image'

import sophiaLogo from '../assets/sophiaLogo.svg'
import frame from '../assets/frame-welcome.png'
import seta from '../assets/setap.svg'
import pen from '../assets/pen.svg'
import star from '../assets/star.svg'
import trash from '../assets/trash.svg'




export default function DashBoard() {
    const data = [
        { id: 1, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "30/100", status: "Em Andamento" },
        { id: 2, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "70/100", status: "Concluído" },
        { id: 3, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "100/100", status: "Erro" },
        { id: 4, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "72/100", status: "Em Andamento" },
        { id: 5, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "30/100", status: "Em Andamento" },
        { id: 6, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "70/100", status: "Concluído" },
        { id: 7, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "100/100", status: "Erro" },
        { id: 8, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "72/100", status: "Em Andamento" },
        { id: 9, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "30/100", status: "Em Andamento" },
        { id: 10, numeroProcesso: "12345678910", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "70/100", status: "Concluído" },
        { id: 11, numeroProcesso: "987654321", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "100/100", status: "Erro" },
        { id: 12, numeroProcesso: "10987654321", dataSubmissao: "01/08/2024", cliente: "Banco Pan S.A.", notaSophia: "72/100", status: "Em Andamento" },
    ];

    const [name, setName] = useState("");

    const [filtroUnico, setFiltroUnico] = useState('');

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    const pages = Math.ceil(data.length / itemsPerPage);

    const starIndex = currentPage * itemsPerPage;
    const endIndex = starIndex + itemsPerPage;
    const currentItens = data.slice(starIndex, endIndex);

    const [sortDirection, setSortDirection] = useState('ascending');
    const [sortNote, setSortNote] = useState('ascending');
    const [sortProcesso, setSortProcesso] = useState('ascending')



    const [sortCriteria, setSortCriteria] = useState('id');

    function proxPagina() {
        if (currentPage >= pagesFiltro - 1) {
            return
        } else {
            setCurrentPage(currentPage + 1)
        }

    }
    function voltaPagina() {
        if (currentPage <= 0) {
            return
        } else {
            setCurrentPage(currentPage - 1)
        }

    }



    useEffect(() => {
        const token = Cookies.get('token');
        const tokenDecoded = jwtDecode(token);
        setName(tokenDecoded.userName)

    }, [])


    const dadosFiltrados = data.filter((item) => {
        return (
            item.numeroProcesso.includes(filtroUnico) ||
            item.dataSubmissao.includes(filtroUnico) ||
            item.cliente.toLowerCase().includes(filtroUnico.toLowerCase()) ||
            item.notaSophia.includes(filtroUnico) ||
            item.status.toLowerCase().includes(filtroUnico.toLowerCase())
        );
    });


    // const filtrados = dadosFiltrados.slice(starIndex, endIndex)
    // const dadosParaRenderizar = filtroUnico ? filtrados : currentItens;
    // const pagesFiltro = Math.ceil(dadosFiltrados.length / itemsPerPage) 

    const sortedId = [...dadosFiltrados].sort((a, b) => {
        return sortDirection === 'ascending' ? a.id - b.id : b.id - a.id;
    });


    const sortedNote = [...dadosFiltrados].sort((a, b) => {
        const sophiaA = a.notaSophia.split('/')[0];
        const sophiaB = b.notaSophia.split('/')[0];
        return sortNote === 'ascending' ? sophiaA - sophiaB : sophiaB - sophiaA;

    })

    const sortNumProcesso = [...dadosFiltrados].sort((a,b) => {
        return sortProcesso === 'ascending' ? a.numeroProcesso - b.numeroProcesso : b.numeroProcesso - a.numeroProcesso;

    })

    function sortedByNote() {
        const direction = sortNote === 'ascending' ? 'descending' : 'ascending';
        setSortNote(direction);
        setSortCriteria('nota');

    }
    function sortById() {
        const direction = sortDirection === 'ascending' ? 'descending' : 'ascending';
        setSortDirection(direction);
        setSortCriteria('id');
    };
    function sortNProcesso() {
        const direction = sortProcesso === 'ascending' ? 'descending' : 'ascending';
        setSortProcesso(direction);
        setSortCriteria('processo');
    };

    let dadosParaRenderizar = [...dadosFiltrados];
    const pagesFiltro = Math.ceil(dadosFiltrados.length / itemsPerPage);

    if (sortCriteria === "id") {
        dadosParaRenderizar = sortedId.slice(starIndex, endIndex);
    }
    else if (sortCriteria === "nota") {
        dadosParaRenderizar = sortedNote.slice(starIndex, endIndex);

    }else if(sortCriteria == "processo"){
        dadosParaRenderizar = sortNumProcesso.slice(starIndex, endIndex);

    }
    else {
        dadosParaRenderizar = filtroUnico ? filtrados : currentItens;
    }




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
            <div className='welcome'>
                <h1>Olá, {name}👋</h1>

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
                        <input type='text' placeholder="🔍 Analises Sophia" value={filtroUnico} onChange={(e) => setFiltroUnico(e.target.value)} />
                        <button>+ Adicionar</button>

                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th onClick={sortById}>ID</th>
                                <th onClick={sortNProcesso}>NÚMERO PROCESSO</th>
                                <th>DATA SUBMISSÃO</th>
                                <th>CLIENTE</th>
                                <th onClick={sortedByNote}>NOTA SOPHIA</th>
                                <th>STATUS</th>
                                <th className='ac-thead'>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                dadosParaRenderizar.map((arq) => (
                                    <tr key={arq.id}>
                                        <td>{arq.id}</td>
                                        <td>{arq.numeroProcesso}</td>
                                        <td>{arq.dataSubmissao}</td>
                                        <td>{arq.cliente}</td>
                                        <td>{arq.notaSophia}</td>
                                        <td>{arq.status}</td>
                                        <td className='actions'>
                                            <button><Image src={pen} width={18} height={18} alt='caneta' /></button>
                                            <button><Image src={star} width={18} height={18} alt='estrela' /></button>
                                            <button><Image src={trash} width={18} height={18} alt='lixo' /></button>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <nav className="flex items-center gap-x-1" aria-label="Pagination">
                        <button onClick={voltaPagina} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-200 dark:focus:bg-white/10" aria-label="Previous">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </button>
                        <div className="flex items-center gap-x-1">
                            <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-100 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-300 dark:text-black dark:focus:bg-black/10">{currentPage + 1}</span>
                            <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">of</span>
                            <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">{pagesFiltro}</span>
                        </div>
                        <button onClick={proxPagina} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-800 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-200 dark:focus:bg-white/10" aria-label="Next">
                            <span className="sr-only">Next</span>
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </nav>

                </div>


            </div>




        </section>



    )
}
