/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { connect } from 'react-redux';
import {
  memoryGame,
  myTunes,
  tryunfo,
  wallet,
} from '../images/imageExports';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

class Projects extends React.Component {
  state = { slidesPerView: 3 }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const screenWidth = window.innerWidth;
    let slidesPerView;
    if (screenWidth > 350) slidesPerView = 1 
    if (screenWidth > 725) slidesPerView = 2
    if (screenWidth > 1090) slidesPerView = 3
    if (screenWidth > 1500) slidesPerView = 4

    this.setState({ slidesPerView })
  }

  render() {
    const { selectedLanguage } = this.props;
    const { slidesPerView } = this.state;
    return (
      <section className="projects" id="projects">
        {selectedLanguage === 'PT-BR' ? (
          <div className="max-width">
            <h2 className="title">Meus projetos</h2>
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="carousel"
            >
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henriquememorygame.vercel.app/"
                  >
                    <div className="box">
                      <img src={memoryGame} alt="" />
                      <div className="text">Jogo da memória</div>
                      <p>
                        Jogo da memória com algumas tecnologias e linguagens de programação, construido com Vue.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henriquemusicplayer.vercel.app/"
                  >
                    <div className="box">
                      <img src={myTunes} alt="" />
                      <div className="text">My Tunes</div>
                      <p>
                        Página de pesquisa de música atraves da API do itunes,
                        montada com React, CSS e JS{' '}
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henrique-super-trunfo.vercel.app/"
                  >
                    <div className="box">
                      <img src={tryunfo} alt="" />
                      <div className="text">Super Trunfo</div>
                      <p>
                        Página de um jogo de Super Trunfo onde o usuário pode customizar a carta que quer adicionar e pode também filtrar as cartas por tipo.{' '}
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://github.com/henriqueambrosano"
                  >
                    <div className="box">
                      <img src={shoppingCartReact} alt="" />
                      <div className="text">Carrinho de compras - React</div>
                      <p>
                        Carrinho de compras montado com React e requisição da
                        API do Mercado Livre
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://github.com/henriqueambrosano"
                  >
                    <div className="box">
                      <img src={jamming} alt="" />
                      <div className="text">Jamming</div>
                      <p>
                        Página de pesquisa de músicas integrada com o Spotify
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henrique-wallet.vercel.app/"
                  >
                    <div className="box">
                      <img src={wallet} alt="" />
                      <div className="text">Wallet</div>
                      <p>
                        Página para registro e controle de despesas com react e
                        redux
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="max-width">
            <h2 className="title">My projects</h2>
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="carousel"
            >
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henriquememorygame.vercel.app/"
                  >
                    <div className="box">
                      <img src={memoryGame} alt="" />
                      <div className="text">Memory Game</div>
                      <p>
                        A memory game of some technologies and programing languages, assembled with Vue.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henriquemusicplayer.vercel.app/"
                  >
                    <div className="box">
                      <img src={myTunes} alt="" />
                      <div className="text">My Tunes</div>
                      <p>
                        Music search page via itunes API, assembled with React,
                        CSS and JS
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henrique-super-trunfo.vercel.app/"
                  >
                    <div className="box">
                      <img src={tryunfo} alt="" />
                      <div className="text">Super Trunfo</div>
                      <p>
                        Page of a Super Trump game, the user can customize the card that he wants to add and can also filter the cards by type.
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://github.com/henriqueambrosano"
                  >
                    <div className="box">
                      <img src={shoppingCartReact} alt="" />
                      <div className="text">Shopping cart - React</div>
                      <p>
                        Shopping cart built with React and API request from
                        Mercado libre
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://github.com/henriqueambrosano"
                  >
                    <div className="box">
                      <img src={jamming} alt="" />
                      <div className="text">Jamming</div>
                      <p>Music search page integrated with Spotify</p>
                    </div>
                  </a>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className="card">
                  <a
                    target="_blank"
                    href="https://henrique-wallet.vercel.app/"
                  >
                    <div className="box">
                      <img src={wallet} alt="" />
                      <div className="text">Wallet</div>
                      <p>
                        Page for recording and controlling expenses with react
                        and redux
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedLanguage: state.selectedLanguage,
});

export default connect(mapStateToProps)(Projects);
