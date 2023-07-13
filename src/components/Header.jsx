/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { brazilFlag, usaFlag } from '../images/imageExports';
import { changeLanguage } from '../redux/actions';

class Header extends React.Component {
  state = {
    navClass: '',
  };

  changeLanguage = ({ target }) => {
    const { alt } = target;
    const { dispatch } = this.props;
    dispatch(changeLanguage(alt));
  };

  toggleClass = () => {
    const { navClass } = this.state;
    this.setState({ navClass: navClass === '' ? 'active' : '' });
  };

  render() {
    const { selectedLanguage } = this.props;
    const { navClass } = this.state;
    return (
      <header>
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <div className="language-container">
                {selectedLanguage === 'PT-BR' ? ( 'Idioma') :('Language')}
                <div className="language">
                  <img
                    src={brazilFlag}
                    alt="PT-BR"
                    onClick={this.changeLanguage}
                  />
                  <img src={usaFlag} alt="EN" onClick={this.changeLanguage} />
                </div>
              </div>
              <a href="#">
                Portfo<span>lio.</span>
              </a>
            </div>
            {selectedLanguage === 'PT-BR' ? (
              <ul className={`menu ${navClass}`}>
                <li>
                  <a href="#home" className="menu-btn" onClick={this.toggleClass}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="menu-btn" onClick={this.toggleClass}>
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="menu-btn" onClick={this.toggleClass}>
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#skills" className="menu-btn" onClick={this.toggleClass}>
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#projects" className="menu-btn" onClick={this.toggleClass}>
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="menu-btn" onClick={this.toggleClass}>
                    Contato
                  </a>
                </li>
              </ul>
            ) : (
              <ul className={`menu ${navClass}`}>
                <li>
                  <a href="#home" className="menu-btn" onClick={this.toggleClass}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="menu-btn" onClick={this.toggleClass}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="menu-btn" onClick={this.toggleClass}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#skills" className="menu-btn" onClick={this.toggleClass}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="menu-btn" onClick={this.toggleClass}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="menu-btn" onClick={this.toggleClass}>
                    Contact
                  </a>
                </li>
              </ul>
            )}
            <div className="menu-btn">
              <i className={`fa-solid fa-bars ${navClass}`} onClick={this.toggleClass}></i>
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
