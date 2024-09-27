import { useState } from "react";
import { Nav } from "../components/Nav"
import '../style/pages/about.css'

export const About = () => {
  let num = 0;

  const autoResize = (e) => {
    const area = e.target
    // const textArea = document.querySelector('textarea')
    // const height = textArea.style.height
    // area.style.height = height + '5px'
    area.style.height = '255px'
    area.style.height = `${area.scrollHeight}px`
  }

  const color = ['white', 'white', 'white', 'white', 'white'];

  const setRate = (index) => {
    const star = document.querySelectorAll('.star')
    if (star[index].style.fill === 'white') {
      for (let i = 0; i <= index; i++) {
        star[i].style.fill = 'blueviolet'
        num = index + 1
      }
    } else {
      for (let i = index; i < star.length; i++) {
        star[i].style.fill = 'white'
        num = index
      }
    }
  }

  const submit = (e) => {
    e.preventDefault()

    const data = {
      feed: e.target.feed.value,
      rate: `${num} star`,
    }

    localStorage.setItem('userFeed', JSON.stringify(data));
    e.target.feed.value = ''
    const star = document.querySelectorAll('.star');
    star.forEach(star => star.style.fill = 'white')
    num = 0;
  }

  return (
    <div>
      <Nav />
      <form onSubmit={submit} className="aboutForm">
        <label> Give feedback please )) </label>
        <textarea name="feed" onChange={autoResize} />
        <div className="starDiv">
          {color.map((color, index) => <svg key={index} className="star" onClick={() => setRate(index)} viewBox="0 0 24 24" style={{ fill: color }}><path d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" /></svg>)}
        </div>
        <button type="Submit"> Send </button>
      </form>
    </div>
  )
}