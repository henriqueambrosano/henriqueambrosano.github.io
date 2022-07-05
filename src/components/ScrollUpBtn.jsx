import React from 'react';

class ScrollUpBtn extends React.Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className={`scroll-up-btn`}>
        <i className="fas fa-angle-up" onClick={this.scrollToTop}></i>
      </div>
    );
  }
}

export default ScrollUpBtn;
