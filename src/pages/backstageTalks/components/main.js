import React from 'react'
import '../styles/main.css'
import Page from './page'

export const MainPage = () => {
    return (
    <div className='page-container' >
        <section id="book-6" className="page" style={{backgroundColor: "#ffffff"}}><Page id="6" color="#e30512" imgLink="backstagetalks_cover_issue_6.png"></Page></section>  
        <section id="book-5" className="page" style={{backgroundColor: "#00c1b5"}}><Page id="5" color="#e30512" imgLink="backstagetalks_cover_issue_5.png"></Page></section>
        <section id="book-4" className="page" style={{backgroundColor: "#ff651a"}}><Page id="4" color="#e30512" imgLink="backstagetalks_cover_issue_4.png"></Page></section>
        <section id="book-3" className="page" style={{backgroundColor: "#ffbe00"}}><Page id="3" color="#e30512" imgLink="backstagetalks_cover_issue_3.png"></Page></section>
        <section id="book-2" className="page" style={{backgroundColor: "#1d3fbb"}}><Page id="2" color="#e30512" imgLink="backstagetalks_cover_issue_2.png"></Page></section>
        <section id="book-1" className="page" style={{backgroundColor: "#e30512"}}><Page id="1" outOfStock="Yes" color="#e30512" imgLink="backstagetalks_cover_issue_1.png"></Page></section>




        
    </div>
  )
}
