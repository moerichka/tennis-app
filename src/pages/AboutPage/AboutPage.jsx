import React from 'react'

import Slider from '../../components/Slider'

import s from "./AboutPage.module.scss"

function AboutPage() {
  return (
    <div>
      <div className={s.header}>Header</div>

      <div className={s.main}>
        <Slider />
      </div>

      <div className={s.footer}>Footer</div>
    </div>
  )
}

export default AboutPage