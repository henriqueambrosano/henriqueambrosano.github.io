import React from 'react';
import { connect } from 'react-redux';
import profilePic from '../images/profilepic.JPEG';
import Typewriter from 'typewriter-effect';

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
                  <Typewriter
                    options={{
                      strings: [
                        'Desenvolvedor Full-stack',
                        'Programador',
                        'Amante da tecnologia',
                      ],
                      autoStart: true,
                      loop: true,
                      pauseFor: 900,
                      delay: 30,
                    }}
                  />
                </div>
                <p>
                  Falando mais sobre mim, tenho 27 anos, atualmente sou
                  estudante da FIAP no curso de Análise de sitemas e inteligência artificial.
                  Ja atuei como desenvolvedor Full-stack em uma fábrica de softwares e estou sempre buscando oportunidades onde posso aplicar meus conhecimentos e desenvolver novas habilidades.
                  <br />
                  Sou apaixonado por aprender e também por ensinar, gosto muito
                  de trabalhar com metodologias ágeis por serem uma
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
                  <Typewriter
                    options={{
                      strings: [
                        'Full-stack Developer',
                        'Programer',
                        'Tech lover',
                      ],
                      autoStart: true,
                      loop: true,
                      pauseFor: 900,
                      delay: 30,
                    }}
                  />
                </div>
                <p>
                  Telling more about myself, I am 27 years old, currently
                  student at FIAP in the System Analysis and Artificial Intelligence course.
                  I've worked as a full-stack developer in a software factory and I'm always looking for opportunities where I can apply my knowledge and develop new skills.
                  <br />
                  I am passionate about learning and also about teaching, I
                  really like to work with agile methodologies because I believe
                  it is the most effective way to deliver a product exactly
                  as requested.
                  <br />
                  My strengths? I'm pretty self-taught, I have a lot ease in
                  learning new content, I am not satisfied until I deliver
                  something that I know was done in the best way and I have a
                  lot of practice and ability in communication and leadership.
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
