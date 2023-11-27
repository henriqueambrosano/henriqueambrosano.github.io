import React from 'react';
import { connect } from 'react-redux';

class Services extends React.Component {
  render() {
    const { selectedLanguage } = this.props;
    return (
      <section className="services" id="services">
        {selectedLanguage === 'PT-BR' ? (
          <div className="max-width">
            <h2 className="title">Meus serviços</h2>
            <div className="serv-content">
              <div className="card">
                <div className="box">
                  <i className="fas fa-paint-brush"></i>
                  <div className="text">CSS</div>
                  <p>
                    Construo sua página exatamente como estiver desenhado pelo
                    seu designer, entregando um site moderno e responsivo
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-chart-line"></i>
                  <div className="text">SEO & performance</div>
                  <p>
                    Utilizo as melhores práticas para atingirmos a melhor performance possivel e também posicionar seu site no
                    topo das páginas de pesquisa do google e outros mecanismos
                    de busca.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-code"></i>
                  <div className="text">De 0 a 100</div>
                  <p>
                    Desenvolvo toda sua página do zero, entregando todas as
                    funcionalidades possiveis, com um funcionamento leve e
                    rápido que pode ser navegado em qualquer dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-width">
            <h2 className="title">Services</h2>
            <div className="serv-content">
              <div className="card">
                <div className="box">
                  <i className="fas fa-paint-brush"></i>
                  <div className="text">CSS</div>
                  <p>
                    I build your page exactly as designed by
                    your designer, delivering a modern and responsive website
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-chart-line"></i>
                  <div className="text">SEO & Performance</div>
                  <p>
                    I use best practices to reach the best performance and position your site in the
                    top of google search pages and other search engines.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-code"></i>
                  <div className="text">From 0 to 60</div>
                  <p>
                    I develop your entire page from scratch, delivering a fast page that can be used on any device with all the
                    possible functionalities.
                  </p>
                </div>
              </div>
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

export default connect(mapStateToProps)(Services);
