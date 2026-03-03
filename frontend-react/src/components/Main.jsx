import React from 'react'
import Button from './Button'
import Head from './Head'
import Footer from './Footer'

const Main = () => {
  return (
    <>

      <div className='container'> 
          <div className='p-5 text-center bg-light-dark rounded'> 
              <h1 className='text-light'>Stock Prediction Portal</h1>
              <p className='text-light lead'>This stock forecasting platform leverages advanced machine learning methods, particularly utilizing a Keras-based LSTM model, seamlessly integrated into the Django framework. The system predicts future stock price movements by evaluating 100-day and 200-day moving averages—key technical indicators commonly used by market analysts to guide trading strategies and investment decisions.</p>
              <Button text="Explore Now" class="btn-info" url="/dashboard"/>         
          </div>
      </div>
      
    </>

  )
}

export default Main