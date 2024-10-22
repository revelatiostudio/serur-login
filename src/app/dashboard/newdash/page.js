'use client'
import React from 'react'
import './newdash.css'


import NavBar from '../../components/NavBar'

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import ia from '../../assets/ia.svg'
import dots from '../../assets/dots.svg'


export default function NewDash() {
  const router = useRouter();
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

          <div className='sec-fields'>
            <div className='top-fields'>
              <div className="max-w-sm  w-[321px]">
                <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black">Número Processo</label>
                <input type="email" id="input-label" className="py-3 px-4 block w-full custom-border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Número Processo" />
              </div>
              <div className='max-w-sm w-[321px]'>
                <label className="block text-sm font-medium mb-2 dark:text-black">Cliente</label>
                <select id="hs-select-label" className=" max-w-sm py-3 px-4 pe-9 block w-full custom-border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-black dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option defaultValue="">Cliente</option>
                  <option>Banco Pan</option>
                </select>
              </div>
              <div className='max-w-sm w-[321px]'>
                <label className="block text-sm font-medium mb-2 dark:text-black">Laudo</label>
                <select id="hs-select-label" className=" max-w-sm py-3 px-4 pe-9 block w-full custom-border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-black dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option defaultValue="">Laudo</option>
                  <option>CSV</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

            </div>

            <div className='bottom-fields'>
              <form className="max-w-sm w-[321px]">
              <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black">Arquivo Laudo</label>
                <label htmlFor="file-input" className="sr-only">Choose file</label>
                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                   file:py-3 file:px-4"/>
              </form>
              <form className="max-w-sm w-[321px]">
              <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black">Inícial</label>
                <label htmlFor="file-input" className="sr-only">Choose file</label>
                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                   file:py-3 file:px-4"/>
              </form>
              <form className="max-w-sm w-[321px]">
              <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black">Contestação</label>
                <label htmlFor="file-input" className="sr-only">Choose file</label>
                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                  file:bg-gray-50 file:border-0
                  file:me-4
                   file:py-3 file:px-4"/>
              </form>

            </div>




          </div>

        </div>

      </div>


    </section>

  )
}
