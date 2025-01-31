import React from 'react'
import './ScrollUp.css'

const ScrollUp = () => {
    window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector('.scrollup');
        if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    })
    const scrollToTop = (e) => {
        e.preventDefault(); 
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      };
    return (
        <>
            <a href="" className="scrollup" onClick={scrollToTop}>
                <i className='uil uil-arrow-up scrollup__icon'></i>
            </a>
        </>
    )
}

export default ScrollUp
