import React from 'react'

const faq = ({faq, index}) => {
  return (
    <div className={"faq" + (faq.open ? 'open' : '')} key={index}>
        <div className="faq-question">
            {faq.question}
        </div>
    </div>
  )
}

export default faq