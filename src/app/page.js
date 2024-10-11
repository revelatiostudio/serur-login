import "./page.css";

import sophiaLogo from '../assets/sophiaLogo.svg'
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

          </div>


        </div>

      </div>
      <div className="sec-opcoes">

      </div>
    </section>
  );
}
