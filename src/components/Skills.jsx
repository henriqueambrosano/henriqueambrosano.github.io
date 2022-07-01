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
                  As linguagens que estudei até agora são, HTML, CSS,
                  JavaScript, React, Python, Solidity. Ao lado destaco as que
                  possuo mais experiência e habilidade.
                  <br />A barra de porcentagem é para representar o quanto
                  considero que domino aquela linguagem.
                </p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>50%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>40%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>45%</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Python</span>
                    <span>10%</span>
                  </div>
                  <div className="line python"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Solidity</span>
                    <span>5%</span>
                  </div>
                  <div className="line solidity"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React</span>
                    <span>40%</span>
                  </div>
                  <div className="line react"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>VueJS</span>
                    <span>10%</span>
                  </div>
                  <div className="line vue"></div>
                </div>
              </div>
            </div>
          </div>
        ) : selectedLanguage === 'ES' ? (
          <div className="max-width">
            <h2 className="title">Mis habilidades</h2>
            <div className="skills-content">
              <div className="column left">
                <div className="text">Mis habilidades y experiências.</div>
                <p>
                  Empecé a estudiar programación por mi cuenta en abril de 2021, hice
                  algunos cursos gratuitos como codecademy, udemy, programadorBr,
                  etc.
                  <br />
                  Los lenguajes que he estudiado hasta ahora son HTML, CSS,
                  JavaScript, React, Python, Solidity. Al lado, destaco los que
                  tengo mas experiencia y habilidad.
                  <br />La barra de porcentaje es para representar cuánto
                  creo que domino ese idioma.
                </p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>50%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>40%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>45%</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Python</span>
                    <span>10%</span>
                  </div>
                  <div className="line python"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Solidity</span>
                    <span>5%</span>
                  </div>
                  <div className="line solidity"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React</span>
                    <span>40%</span>
                  </div>
                  <div className="line react"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>VueJS</span>
                    <span>10%</span>
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
                  The languages I have studied so far are HTML, CSS,
                  JavaScript, React, Python, Solidity. At the side, I highlight those
                  I have more experience and skill.
                  <br />The percentage bar is to represent how much
                  I think I master that language.
                </p>
              </div>
              <div className="column right">
                <div className="bars">
                  <div className="info">
                    <span>HTML</span>
                    <span>50%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>CSS</span>
                    <span>40%</span>
                  </div>
                  <div className="line css"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>45%</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Python</span>
                    <span>10%</span>
                  </div>
                  <div className="line python"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Solidity</span>
                    <span>5%</span>
                  </div>
                  <div className="line solidity"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React</span>
                    <span>40%</span>
                  </div>
                  <div className="line react"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>VueJS</span>
                    <span>10%</span>
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
