import './index.scss'

interface resutBoxProps {
  wordCount: number,
  sentenceCount: number,
  paraCount: number,
  characterCount: number,
  
  
}


const ResultBox = (props: resutBoxProps) => {
  const resultBar = [
    {
      title: 'Words',
      value: props.wordCount,
    },
    {
      title: 'Characters',
      value: props.characterCount,
    },
    {
      title: 'Sentences',
      value: props.sentenceCount,
    },
    {
      title: 'Paragraphs ',
      value: props.paraCount,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
