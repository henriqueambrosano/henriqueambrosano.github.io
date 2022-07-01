/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { brazilFlag, spainFlag, usaFlag } from '../images/imageExports';
import { changeLanguage } from '../redux/actions';

class Header extends React.Component {

  changeLanguage = ({ target }) => {
    const { alt } = target;
    const { dispatch } = this.props;
    dispatch(changeLanguage(alt))
  }
  
  render() {
    const { selectedLanguage } = this.props;
    return (
      <header>
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
            <div className="language">
              <img src={brazilFlag} alt="PT-BR" onClick={this.changeLanguage} />
              <img src={spainFlag} alt="ES" onClick={this.changeLanguage} />
              <img src={usaFlag} alt="EN" onClick={this.changeLanguage}/>
            </div>
              <a href="#">
                Portfo<span>lio.</span>
              </a>
            </div>
            {selectedLanguage === 'PT-BR' ? (
              <ul className="menu">
                <li>
                  <a href="#home" className="menu-btn">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="menu-btn">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="menu-btn">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#skills" className="menu-btn">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="menu-btn">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="menu-btn">
                    Contato
                  </a>
                </li>
              </ul>
            ) : selectedLanguage === 'ES' ? (
              <ul className="menu">
                <li>
                  <a href="#home" className="menu-btn">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="menu-btn">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="menu-btn">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#skills" className="menu-btn">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="menu-btn">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="menu-btn">
                    Contacto
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="menu">
                <li>
                  <a href="#home" className="menu-btn">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="menu-btn">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="menu-btn">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#skills" className="menu-btn">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="menu-btn">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="menu-btn">
                    Contact
                  </a>
                </li>
              </ul>
            )}
            <div className="menu-btn">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedLanguage: state.selectedLanguage,
});

export default connect(mapStateToProps)(Header);
