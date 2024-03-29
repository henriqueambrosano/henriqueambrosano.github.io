import React from 'react';
import { connect } from 'react-redux';

class Skills extends React.Component {
  render() {
    const { selectedLanguage } = this.props;
    return (
      <section className="skills" id="skills">
        {selectedLanguage === 'PT-BR' ? (
          <div className="max-width">
            <h2 className="title">Minhas habilidades</h2>
            <div className="skills-content">
              <div className="column left">
                <div className="text">Minhas habilidades e experiências.</div>
                <p>
                  Comecei a estudar programação sozinho em abril de 2021, fiz
                  alguns cursos livres como codecademy, udemy, programadorBr,
                  etc.
                  <br />
                  As tecnologias que estudei e trabalhei até agora são, HTML, CSS,
                  JavaScript, React, Python, Vue, MySQL, etc. 
                  <br />
                  O gráfico a seguir mostra meu nivel de dominio em cada uma.
                </p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>85%</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Python</span>
                    <span>55%</span>
                  </div>
                  <div className="line python"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Git</span>
                    <span>80%</span>
                  </div>
                  <div className="line git"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React</span>
                    <span>70%</span>
                  </div>
                  <div className="line react"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>VueJS</span>
                    <span>60%</span>
                  </div>
                  <div className="line vue"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-width">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
              <div className="column left">
                <div className="text">My skills and experiences.</div>
                <p>
                  I started studying programming by myself in April 2021, I did
                  some free courses like codecademy, udemy, programadorBr,
                  etc.
                  <br />
                  The technologies I have studied and worked with so far are HTML, CSS,
                  JavaScript, React, Python, Vue, MySQL, etc.
                  <br />
                  The graph shows how skilled I'm at each one.
                </p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>85%</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Python</span>
                    <span>55%</span>
                  </div>
                  <div className="line python"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Git</span>
                    <span>80%</span>
                  </div>
                  <div className="line git"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React</span>
                    <span>70%</span>
                  </div>
                  <div className="line react"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>VueJS</span>
                    <span>60%</span>
                  </div>
                  <div className="line vue"></div>
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

export default connect(mapStateToProps)(Skills);
