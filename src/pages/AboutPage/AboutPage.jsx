import React from 'react'

import Slider from '../../components/Slider'

import cort1 from "../../images/cort1.jpg"
import cort2 from "../../images/cort2.jpg"

import s from "./AboutPage.module.scss"

function AboutPage() {

  const slides = [
    {
      id: 0,
      image: cort1,
      description: "Голубой корт"
    },
    {
      id: 1,
      image: cort2,
      description: "Закрытый корт"
    },
  ]

  return (
    <div>
      <div className={s.header}>Header</div>

      <div className={s.main}>
        <div className={s.container}>
          <Slider slides={slides} />
        </div>
      </div>

      <div className={s.footer}>Footer</div>
    </div>
  )
}

export default AboutPage