import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { useState } from 'react'

const App = () => {
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [sentenceCount, setSentenceCount] = useState(0)
  const [paraCount, setParaCount] = useState(0)
  const [proCount, setProCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox wordCount={wordCount} sentenceCount={sentenceCount} paraCount={paraCount} characterCount={characterCount}/>
          <TextArea
            setWordCount={setWordCount}
            setCharacterCount={setCharacterCount}
            setSentenceCount={setSentenceCount}
            setParaCount={setParaCount}
            setProCount={setProCount}
          />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
