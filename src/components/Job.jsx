import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'


const Job = ({title, company, dates, duties}) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty, i) => {
        return (              
        <div key={i} className='job-desc'>
          <FaAngleDoubleRight className='job-right'/>
          <p>{duty}</p>
        </div>
        );
      })}
    </>
  )
}

export default Job
