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
            <ul class="relative flex flex-row gap-x-2">
              <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                <div class="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                  <span class="size-7 flex justify-center items-center shrink-0 custom-span rounded-full">
                    ✓
                  </span>
                  <span class="ms-2 block text-sm font-medium text-gray-800 dark:text-black">
                    Informações
                  </span>
                </div>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
              </li>

              <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
                <div class="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
                  <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-200 dark:text-black">
                    2
                  </span>
                  <span class="ms-2 block text-sm font-medium text-gray-800 dark:text-black">
                    Validação
                  </span>
                </div>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
              </li>

            </ul>


          </div>

        </div>

      </div>


    </section>

  )
}
