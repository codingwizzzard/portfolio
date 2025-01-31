import React, { useState } from 'react'
import './Services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <>
      <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className='uil uil-web-grid services__icon'></i>
              <h3 className='services__title'>Frontend <br /> Development</h3>
            </div>

            <span className='services__button' onClick={() => toggleTab(1)}>
              View More <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Frontend Development</h3>
                <p className='services__modal-description'>
                  Building responsive and user-friendly interfaces using React.js for seamless user experiences
                </p>

                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>I develop the user interface.</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>Web page development</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>I create the ux element interaction.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className='uil uil-arrow services__icon'></i>
              <h3 className='services__title'>Backend <br /> Development</h3>
            </div>

            <span className='services__button' onClick={() => toggleTab(2)}>
              View More <i className='uil uil-arrow-right services__button-icon'></i>
            </span>

            <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
              <div className="services__modal-content">
                <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>

                <h3 className="services__modal-title">Backend Development</h3>
                <p className='services__modal-description'>
                  Skilled in building scalable server-side solutions and working with databases and APIs to ensure efficient data management.
                </p>

                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>I design and implement RESTful APIs for seamless communication between frontend and backend.</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>I develop and optimize databases for efficient data storage and retrieval.</p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>I ensure server-side security and scalability for high-performance applications.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
