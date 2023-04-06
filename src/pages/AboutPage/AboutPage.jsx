import React from 'react'
import { Link } from 'react-router-dom'

import s from "./AboutPage.module.scss"

function AboutPage() {
  return (
    <div>
      AboutPage

      <Link to="/news">to news</Link>
      <Link to="/about">to about</Link>
    </div>
  )
}

export default AboutPage