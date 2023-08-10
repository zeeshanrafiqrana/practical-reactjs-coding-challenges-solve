import './index.scss';
// import pronouns from '../../data/pronouns';

interface textAreaProps {
  setWordCount: any, //done
  setCharacterCount: any,
  setSentenceCount: any,
  setParaCount: any,
  setProCount: any
}

const TextArea = (props: textAreaProps) => {
  const analyzeTextAreaElement = (event: any) => {
    var value = event.target.value;
    props.setCharacterCount(value.length)
    props.setWordCount(value.split(/\s+/).length)
    console.log("[TextArea]-event value", value);
    props.setSentenceCount(value.split(/[.!a~z?]/).length)
    props.setParaCount(value.split(/\n/).length )
    
    // 
  }
  return <textarea className="text-area" placeholder="Paste your text here..."  onChange={analyzeTextAreaElement}/>
}

export default TextArea
