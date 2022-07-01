import React from 'react';
import { connect } from 'react-redux';
import profilePic from '../images/profilepic.JPEG'

class About extends React.Component {
  render() {
    const { selectedLanguage } = this.props;
    return (
      <section className="about" id="about">
        {selectedLanguage === 'PT-BR' ? (
          <div className="max-width">
            <h2 className="title">Sobre mim</h2>
            <div className="about-content">
              <div className="column left">
                <img src={profilePic} alt="henrique ambrosano" />
              </div>
              <div className="column right">
                <div className="text">
                  Meu nome é Henrique e eu sou{' '}
                  <div className="div-type">
                    <span className="typing-2"></span>
                  </div>
                </div>
                <p>
                  Falando mais sobre mim, tenho 25 anos, atualmente sou
                  estudante da Trybe(comecei em fevereiro de 2022), que é uma
                  escola de programação que forma desenvolvedores Full-Stack,
                  minha previsão de formatura é em fevereiro de 2023, porem
                  neste momento ja quero começar a trabalhar como desenvolvedor
                  não só para ganhar experiência mas também porque tenho certeza
                  que tenho muito a agregar ao time e a empresa que eu for
                  trabalhar.
                  <br />
                  Sou apaixonado por aprender e também por ensinar, gosto muito
                  de trabalhar com metodologias ágeis pois acredito ser uma
                  forma bem mais eficiente para entregar um produto exatamente
                  como foi pedido.
                  <br />
                  Meus pontos fortes? Sou bem auto-didata, tenho bastante
                  facilidade em aprender novos conteúdos, não me contento
                  enquanto nao entregar algo que sei que foi feito da melhor
                  forma e tenho bastante facilidade e habilidade em comunicação
                  e liderança.
                </p>
              </div>
            </div>
          </div>
        ) : selectedLanguage === 'ES' ? (
          <div className="max-width">
            <h2 className="title">Sobre mi</h2>
            <div className="about-content">
              <div className="column left">
                <img src={profilePic} alt="henrique ambrosano" />
              </div>
              <div className="column right">
                <div className="text">
                  Mi nombre es Henrique y yo soy{' '}
                  <div className="div-type">
                    <span className="typing-2"></span>
                  </div>
                </div>
                <p>
                  Hablando más de mí, tengo 25 años, actualmente soy
                  estudiante en Trybe (comencé en febrero de 2022), que es una
                  escuela de programación que entrena a desarrolladores Full-Stack,
                  mi pronóstico de graduación es en febrero de 2023, pero
                  ahora mismo quiero empezar a trabajar como desarrollador
                  no solo para ganar experiencia sino también porque estoy seguro
                  que tengo mucho que aportar al equipo y a la empresa a la que acudo
                  trabajar.
                  <br />
                  Me apasiona aprender y también enseñar, me gusta mucho
                  trabajar con metodologías ágiles porque creo que es una
                  manera mucho más eficiente de entregar un producto exactamente
                  de acuerdo a lo pedido.
                  <br />
                  ¿Mis fortalezas? Soy bastante autodidacta, tengo mucho
                  facilidad para aprender nuevos contenidos, no estoy satisfecho
                  hasta que entregue algo que sé que fue hecho de la mejor manera
                  manera y tengo mucha facilidad y habilidad en la comunicacion
                  y liderazgo.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-width">
            <h2 className="title">About</h2>
            <div className="about-content">
              <div className="column left">
                <img src={profilePic} alt="henrique ambrosano" />
              </div>
              <div className="column right">
                <div className="text">
                  My name is Henrique and I am a{' '}
                  <div className="div-type">
                    <span className="typing-2"></span>
                  </div>
                </div>
                <p>
                  Talking more about myself, I am 25 years old, currently I am
                  student at Trybe (I started in Feb 2022), which is a
                  programming school that trains Full-Stack developers,
                  my graduation forecast is in february 2023, but
                  right now I want to start working as a developer
                  not only to gain experience but also because I'm sure
                  that I have a lot to add to the time and company I stop
                  to work.
                  <br />
                  I am passionate about learning and also about teaching, I really like
                  to work with agile methodologies because I believe it is a
                  much more efficient way to deliver a product exactly
                  as requested.
                  <br />
                  My strengths? I'm pretty self-taught, I have a lot
                  ease in learning new content, I am not satisfied
                  until I deliver something that I know was done in the best
                  way and I have a lot of facility and ability in communication
                  and leadership.
                </p>
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

export default connect(mapStateToProps)(About);
