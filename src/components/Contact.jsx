/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    const { selectedLanguage } = this.props;
    return (
      <section className="contact" id="contact">
        {selectedLanguage === 'PT-BR' ? (
          <div className="max-width">
            <h2 className="title">Entre em contato</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Entre em contato</div>
                <p>
                  Abaixo estão minhas melhores formas de contato e meus links
                  para LinkedIn e GitHub, fique a vontade para me enviar um
                  e-mail, um whats-app ou me ligar para conversarmos melhor!
                </p>
                <div className="icons">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <div className="info">
                      <div className="head">Nome</div>
                      <div className="sub-title">Henrique Ambrosano</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                      <div className="head">Endereço</div>
                      <div className="sub-title">Belo Horizonte/MG, Brazil</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-envelope"></i>
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title">
                        Henriqueambrosano@hotmail.com
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <div className="head">Telefone / WhatsApp</div>
                      <div className="sub-title">+55 31 9 8490-1778</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-brands fa-github"></i>
                    <div className="info">
                      <div className="head">GitHub</div>
                      <a
                        target="_blank"
                        href="https://github.com/henriqueambrosano"
                        className="sub-title link"
                      >
                        Visite meu GitHub
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <div className="head">LinkedIn</div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/henrique-ambrosano-095199b0"
                        className="sub-title link"
                      >
                        Visite meu perfil no LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="column right">
                <div className="text">Envie uma mensagem</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Nome" required />
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Assunto" required />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Descreva o projeto / motivo do contato..."
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Enviar mensagem</button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        ) : selectedLanguage === 'ES' ? (
          <div className="max-width">
            <h2 className="title">Contáctame</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Entre en contacto</div>
                <p>
                  A continuación se encuentran mis mejores formas de contactarlo y mis enlaces.
                  a LinkedIn y GitHub, no dude en enviarme un
                  email, whats-app o llámame para hablar mejor!
                </p>
                <div className="icons">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <div className="info">
                      <div className="head">Nombre</div>
                      <div className="sub-title">Henrique Ambrosano</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                      <div className="head">Dirección</div>
                      <div className="sub-title">Belo Horizonte/MG, Brazil</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-envelope"></i>
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title">
                        Henriqueambrosano@hotmail.com
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <div className="head">Teléfono / WhatsApp</div>
                      <div className="sub-title">+55 31 9 8490-1778</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-brands fa-github"></i>
                    <div className="info">
                      <div className="head">GitHub</div>
                      <a
                        target="_blank"
                        href="https://github.com/henriqueambrosano"
                        className="sub-title link"
                      >
                        Visita mi GitHub
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <div className="head">LinkedIn</div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/henrique-ambrosano-095199b0"
                        className="sub-title link"
                      >
                        Visita mi perfil de LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="column right">
                <div className="text">Enviar un mensaje</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Nombre" required />
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Tema" required />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Describa el proyecto / motivo del contacto..."
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Enviar mensaje</button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Get in touch</div>
                <p>
                  Below are my best ways to contact you and my links.
                  to LinkedIn and GitHub, feel free to send me a
                  email, a whats-app or call me so we can talk better!
                </p>
                <div className="icons">
                  <div className="row">
                    <i className="fas fa-user"></i>
                    <div className="info">
                      <div className="head">Name</div>
                      <div className="sub-title">Henrique Ambrosano</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                      <div className="head">Address</div>
                      <div className="sub-title">Belo Horizonte/MG, Brazil</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fas fa-envelope"></i>
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title">
                        henriqueambrosano@hotmail.com
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <div className="head">Phone / WhatsApp</div>
                      <div className="sub-title">+55 31 9 8490-1778</div>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-brands fa-github"></i>
                    <div className="info">
                      <div className="head">GitHub</div>
                      <a
                        target="_blank"
                        href="https://github.com/henriqueambrosano"
                        className="sub-title link"
                      >
                        Visit my GitHub
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <div className="head">LinkedIn</div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/henrique-ambrosano-095199b0"
                        className="sub-title link"
                      >
                        Visit my LinkedIn profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="column right">
                <div className="text">Send a message</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Name" required />
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Describe the project / reason for contact..."
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedLanguage: state.selectedLanguage,
});

export default connect(mapStateToProps)(Contact);
