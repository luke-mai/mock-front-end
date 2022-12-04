import React from 'react'
import "../styles/fixedContent.css"
import { HashLink } from 'react-router-hash-link'

function FixedContent() {
  const numbers = [6,5,4,3,2,1]
  return (
    <div className= "wrapping">
       <div className = "topLeft"><img src={require("../images/logo.png")} alt="This is a cool logo"/></div>
        <div className = "topRight"><p className='topRight-text'>info@backstagetalks.com</p></div>
        <div className = "bottomLeft"><p className='bottomLeft-text'>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.</p></div>
        <div className = "bottomRight">
            {numbers.map((number) =>
                <HashLink className="link" smooth to={`/#book-${number}`}><p className='bottomRight-menu'>Issue #{number}</p> </HashLink>
            )}
        </div>
    </div>
  )
}

export default FixedContent