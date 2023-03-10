import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div>

      <footer className="bg-dark text-center text-white">
        <div className="container p-2">


          <section className="mb-1">
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Pokemon/?locale=es_LA" role="button">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Pokemon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" role="button">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.pokemon.com/us" role="button">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </section>



        </div>

        <div style={{ backgroundColor: '#cc0000' }} className="text-center p-3">
          © 2023 Bit Legion. Todos los derechos reservados.
        </div>


      </footer>


    </div>
  )
}
