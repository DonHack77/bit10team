import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div>

      <footer className="bg-dark text-center text-white">
        <div className="container p-4">


          <section className="mb-4">
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

          <section>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Jhonatan</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-white">Link 1</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Valentina</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-white">Link 1</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Donovan</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-white">Link 1</a></li>
                </ul>
              </div>


              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Melany</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#!" className="text-white">Link 1</a></li>
                </ul>
              </div>

            </div>

          </section>

        </div>

        <div style={{ backgroundColor: 'rgba(8, 0, 0, 0.2)' }} className="text-center p-3">
          © 2023 Bit Legion. Todos los derechos reservados.
        </div>


      </footer>


    </div>
  )
}
