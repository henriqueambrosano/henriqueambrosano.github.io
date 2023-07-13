import React from 'react';
import Typewriter from 'typewriter-effect';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { selectedLanguage } = this.props;
    return (
      <section className="home" id="home">
        <div className="max-width">
          {selectedLanguage === 'PT-BR' ? (
            <div className="home-content">
              <div className="text-1">Olá, meu nome é</div>
              <div className="text-2">Henrique Ambrosano</div>
              <div className="text-3">
                e eu sou{' '}
                <Typewriter
                  options={{
                    strings: [
                      'Full-stack Developer',
                      'Freelancer',
                      'Programer',
                      'Tech lover'
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 500,
                    delay: 80,
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="home-content">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Henrique Ambrosano</div>
              <div className="text-3">
                and I am{' '}
                <Typewriter
                  options={{
                    strings: [
                      'Full-stack Developer',
                      'Freelancer',
                      'Programer',
                      'Tech lover'
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 500,
                    delay: 80,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedLanguage: state.selectedLanguage,
});

export default connect(mapStateToProps)(Home);
