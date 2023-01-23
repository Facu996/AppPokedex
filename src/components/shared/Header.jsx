import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
  const navigate = useNavigate()
  const { trainer, configOpen } = useSelector(state => state)
  const dispatch = useDispatch()
  

  return (
    <div className='c-header'>
      <img src="img/Home/pokedex.png" alt="Pokedex" className='header__title' />
      <div className="red-container">
      </div>
      <div className="black-container">
        <div className="header__circle">
          <div className="header__inner-circle">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header