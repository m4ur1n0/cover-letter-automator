import React, {useState} from 'react'
import parse_input from '../parse_input';

const CoverLetterInput = () => {
    const [text, changeText] = useState("");
    const textAreaRef = React.useRef(null); // use a reference to the DOM so that we can look at the values in the input later

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the event from having the default effect

        parse_input(text); // using the kept state

        textAreaRef.current.value = "";
        changeText("");
    }

    const handleKeyDown = (e) => {
        // ensure that enter doesn't submit, but command enter does
        if (e.key === "Enter") {
            if (e.metaKey) {
                // metakey means the ctrl key (which is command on mac)
                handleSubmit(e);
            } 
            // else {
            //     e.preventDefault();
            //     changeText((prevText) => prevText + "\n");
            // }
        }
    }

    const handleChange = (e) => {
        // make it a fucking controlled component ig, even tho we dont rly need to?
        changeText(e.target.value);
    }

  return (
    <div className="cover-letter-input-container">
      <form onSubmit={handleSubmit}>
        <textarea 
        ref ={textAreaRef} 
        placeholder="Add raw cover letter text here..."
        className='w-6/12 h-[20rem] p-4 resize-none bg-gray-100 rounded-md placeholder-top-left break-words leading-tight focus:outline-black whitespace-pre-wrap' 
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default CoverLetterInput
