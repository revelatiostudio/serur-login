import "./page.css";

import sophiaLogo from '../assets/sophiaLogo.svg'
import serur from '../assets/serur.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="container-cadastros">
      <div className="sec-login">
        <div className="login">
          <Image
            src={sophiaLogo}
            width={166}
            height={44}
            alt="sophia logo"
          />
          <div className="p-text">
            <p>Preencha os campos abaixo</p>
          </div>

          <div className="sec-campos">
          <div class="w-full">
            <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
            <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-customGray dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="*******@gmail.com"/>
          </div>
          <div class="w-full mt-4 ">
            <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Senha</label>
            <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-customGray dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="*******"/>
          </div>
          <p><a>Esqueceu a senha?</a></p>
          </div>

          <div className="campos-btn">
            <button>Continuar</button>
          </div>
          <p className="p2">Não tem conta? <a>Solicitar</a></p>

          <Image
          style={{ marginTop: '150px'}}
            src={serur}
            width={166}
            height={44}
            alt="serur logo"
          />

        </div>

      </div>
      <div className="sec-opcoes">

      </div>
    </section>
  );
}
