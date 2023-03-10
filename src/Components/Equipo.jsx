import React from 'react';
import '../Style.css';

export const Equipo = () => {
    return (
        <section id="team" className="team section-bg">
            <div className="container">

                <div className="section-title">
                    <span>Bit Legion</span>
                    <h2>Bit Legion</h2>
                    <p>Hola, nosotros somos Bit Legion, y aquí encontraras más información sobre nosotros</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src="/src/Img/Donovan.jpg" alt="" />
                            <h4>Donovan</h4>
                            <div className="social">
                                <a href="https://github.com/DonHack77" target="_blank"><i className="bi bi-github"></i></a>
                                <a href="https://www.instagram.com/donovaan.oficial/" target="_blank"><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/donovan-stif-cano-gonzalez-b75322257/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src="/src/Img/Jhonatan.jpg" alt="" />
                            <h4>Jhonatan</h4>
                            <div className="social">
                                <a href="https://jsr666.github.io/bit07me/" target="_blank"><i className="bi bi-github"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/jdsr424/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src="/src/Img/Melany.jpg" alt="" />
                            <h4>Melany</h4>
                            <div className="social">
                                <a href=""><i className="bi bi-github"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/uhanekaumaha/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}
