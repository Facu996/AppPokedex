import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormInputButton from '../components/FormInputButton'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import './styles/Home.css'

const Home = () => {
  const { trainer } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerGlobal(e.target.trainer.value.trim()))
    e.target.trainer.value = ""
    navigate('pokedex')
  }


  return (
    <article className='c-home'>
      <img src="img/Home/pokedex.png" alt="Pokedex" className='home__title' />
      <section className='home__body'>
        <h1 className='home__greeting'>Hi trainer!</h1>
        <p className='home__petition'>Give me your name to start</p>
      </section>
      <FormInputButton
        handleSubmit={handleSubmit}
        id='trainer'
        placeholder='Your name...'
        textButton='Start'
        value={trainer}
        modifierMainContainer='c-form--home'
      />
      <footer className='home-footer'>
        <div className="home-footer__red-container">
        </div>
        <div className="home-footer__black-container">
          <div className="home-footer__circle">
            <div className="home-footer__inner-circle">
            </div>
          </div>
        </div>
      </footer>
    </article>
  )
}

export default Home