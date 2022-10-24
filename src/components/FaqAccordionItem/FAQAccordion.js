import React from 'react'
import './_faqaccordion.scss'


const FAQAccordion = ({id, heading, title, content }) => {
  return (
     <div className="accordion-item" id={heading}>
                <h2 className="accordion-header" id={heading}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls={id}
                    style={{fontWeight: 500}}
                  >
                    {title}
                  </button>
                </h2>
                <div
                  id={id}
                  className="accordion-collapse collapse"
                  aria-labelledby={heading}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" dangerouslySetInnerHTML={{__html: content}}>
         
                  </div>
                </div>
              </div>
  )
}

export default FAQAccordion