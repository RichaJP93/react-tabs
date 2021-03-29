import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import Job from './components/Job'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();    
  }, []);

  if(isLoading) {
    return <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  }

  const {company, dates, duties, title} = jobs[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          <h3>Previous Companies:</h3>
          {jobs.map((item, index) => {
            return (
              <Button 
                key={item.id} 
                index={index} 
                onClick={setValue} 
                item={item} 
                value={value}
              />              
            );
          })}
        </div>
        <article className='job-info'>
          <Job 
            title={title} 
            company={company} 
            dates={dates} 
            duties={duties} 
          />
        </article>
      </div>
    </section>
  )
  
}

export default App