'use client'
import React, { useRef } from 'react'
import './newdash.css'


import NavBar from '../../components/NavBar'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import ia from '../../assets/ia.svg'
import dots from '../../assets/dots.svg'
import info from '../../assets/info.svg'

import axios from 'axios';



export default function NewDash() {
  const router = useRouter();
  const numProcesso = useRef();
  const cliente = useRef();
  const laudo = useRef(null);
  const arqLaudo = useRef();
  const arqInicial = useRef();
  const arqContestacao = useRef();

  function recebeDados(event) {
    event.preventDefault();
    const dadosProcesso = numProcesso.current.value;
    const dadosCliente = cliente.current.value;
    const dadosLaudo = laudo.current.value;
    const fileLaudo = arqLaudo.current.files[0]
    const fileInicial = arqInicial.current.files[0];
    const fileContestacao = arqContestacao.current.files[0];

    const formData = new FormData();
    formData.append('fileLaudo', fileLaudo);
    formData.append('fileInicial', fileInicial);
    formData.append('fileContestacao', fileContestacao);
    //enviaCampos(dadosProcesso,dadosCliente,dadosLaudo)
    //enviaArquivos(formData, dadosProcesso)
    

  }
  async function enviaCampos(dadosProcesso,dadosCliente,dadosLaudo) {
    try {
      const response = await axios.post('https://serur-ia-sophia.vercel.app/api/process/create',{
        processNumber: Number(dadosProcesso),
        client: dadosCliente,
        reportType : dadosLaudo

      })

      return alert(response.data.message)

    } catch (error) {
      return alert(error.response.data.message);
      
    }
    
  }

  async function enviaArquivos(formData, dadosProcesso){
    console.log(formData.get("fileLaudo"))
    try {
      const response = await axios.post('https://serur-ia-sophia.vercel.app/api/process/upload',{
        id: Number(dadosProcesso),
        initial: formData.get("fileLaudo"),
        dispute: formData.get("fileContestacao")

      })

      console.log(response.data.message)
      
    } catch (error) {
      console.log(error)
      return alert(error.response.data.message);

    }

  }
  return (
    <section className='container-dash'>
      <div className='newdash'>
        <NavBar />
        <div className='back' onClick={() => router.push('/dashboard')}>
          <a> ‹ Voltar</a>
        </div>

        <div className='info'>
          <Image
            src={ia}
            width={60}
            height={60}
            alt='' />
          <p>Preencha abaixo as informações solicitadas.</p>
          <Image src={dots} width={30} height={30} alt="3 pontos" style={{ cursor: "pointer" }} />
        </div>

        <div className='sec-info'>
          <div className='text-info'>
            <p>Informações</p>
          </div>
          <div className='sec-path'>
            <ul className="relative flex flex-row gap-x-2">
              <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                  <span className="size-7 flex justify-center items-center shrink-0 custom-span rounded-full">
                    ✓
                  </span>
                  <span className="ms-2 block text-sm font-medium text-gray-800 dark:text-black">
                    Informações
                  </span>
                </div>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
              </li>

              <li className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-200 dark:text-black">
                    2
                  </span>
                  <span className="ms-2 block text-sm font-medium text-gray-800 dark:text-black">
                    Validação
                  </span>
                </div>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
              </li>

            </ul>

          </div>


          <form onSubmit={recebeDados}>
            <div className='sec-fields'>
              <div className='top-fields'>
                <div className="max-w-sm  w-[321px]">
                  <label htmlFor="input-label" className="block text-medium font-medium mb-2 dark:text-black">Número Processo</label>
                  <input ref={numProcesso} type="text" id="input-label" className="py-3 px-4 block w-full custom-border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Número Processo" />
                </div>
                <div className='max-w-sm w-[321px]'>
                  <label className="block text-medium font-medium mb-2 dark:text-black flex items-center ">Cliente <Image src={info} width={15} height={15} className="ml-2" alt=''/></label>
                  <select required ref={cliente} id="hs-select-label" className=" max-w-sm py-3 px-4 pe-9 block w-full custom-border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-black dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    <option defaultValue="">Cliente</option>
                    <option>Banco Pan</option>
                  </select>
                </div>
                <div className='max-w-sm w-[321px]'>
                  <label className="block text-medium font-medium mb-2 dark:text-black flex items-center">Laudo <Image src={info} width={15} height={15} className="ml-2" alt=''/></label>
                  <select required ref={laudo} id="hs-select-label" className=" max-w-sm py-3 px-4 pe-9 block w-full custom-border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-black dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    <option defaultValue="">CSV</option>
                    <option>Manual</option>
                  </select>
                </div>

              </div>

              <div className='bottom-fields'>
                <div className="max-w-sm w-[321px]">
                  <label htmlFor="input-label" className="block text-medium font-medium mb-2 dark:text-black flex items-center">Arquivo Laudo <Image src={info} width={15} height={15} className="ml-2" alt=''/></label>
                  <label htmlFor="file-input" className="sr-only">Choose file </label>
                  <input required ref={arqLaudo} type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                   file:py-3 file:px-4"/>
                </div>
                <div className="max-w-sm w-[321px]">
                  <label htmlFor="input-label" className="block text-medium font-medium mb-2 dark:text-black flex items-center">Inícial <Image src={info} width={15} height={15} className="ml-2" alt=''/></label>
                  <label htmlFor="file-input" className="sr-only">Choose file</label>
                  <input required ref={arqInicial} type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                   file:py-3 file:px-4"/>
                </div>
                <div className="max-w-sm w-[321px]">
                  <label htmlFor="input-label" className="block text-medium font-medium mb-2 dark:text-black flex items-center">Contestação <Image src={info} width={15} height={15} className="ml-2" alt=''/></label>
                  <label htmlFor="file-input" className="sr-only">Choose file</label>
                  <input required ref={arqContestacao} type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                   file:py-3 file:px-4"/>
                </div>

                <button>Enviar</button>

              </div>




            </div>
          </form>


        </div>

      </div>


    </section>

  )
}
