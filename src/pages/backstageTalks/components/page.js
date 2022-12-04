import React from 'react'
import "../styles/page.css"

function Page(props) {
    let Message = <>Testing</>;
    if(props.outOfStock){
        Message = <p className='text'>Issue #{props.id} is sold out.<br/><br/>If you are lucky, you may get the last pieces in selected stores.</p>;
    }
    else{
        Message = <p className='text'>Issue #{props.id}<br/><br/>BUY HERE<br/><br/>or in selected stores.</p>;
    }
    return (
        <div className="container" >
            <img className="page-element book-cover" width="420px" height="532px" src={require(`../images/${props.imgLink}`)} alt="This is a really cool book cover"/>
            <div className='page-element'>{Message}</div>
        </div>
    )
}

export default Page
