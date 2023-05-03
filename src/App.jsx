import { useState } from 'react'
import text from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [paragraphs, setParagraphs] = useState(1)
  const [lorem, setLorem] = useState(text)
  const [showParagraphs, setShowParagraphs] = useState([])
  const generateParagraphs = (e) => {
    e.preventDefault()
    setShowParagraphs(lorem.slice(0, paragraphs))
  }

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form onSubmit={(e) => generateParagraphs(e)} className='lorem-form'>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          onChange={(e) => setParagraphs(Number.parseInt(e.target.value))}
          type='number'
          name='amount'
          min={1}
          max={8}
          value={paragraphs}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {showParagraphs.map((p, index) => (
          <p key={nanoid()}>{p}</p>
        ))}
      </article>
    </section>
  )
}

export default App
