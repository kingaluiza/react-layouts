import React from 'react'
import Card from './layouts/grid/Card'
import cards from './layouts/grid/cardData'

function App() {
  return(
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {cards.map((card, idx) => (
      <Card key={idx} {...card} />
    ))}
  </div>
  )
}

export default App
