import { useState } from "react";
import react from 'react';


function WriteMessage(){
    const [Text, setText] = useState("")
    const [prompt, setPrompt] = useState('')
    const [Classifying ,setClassifying] = useState(false)


    const handleSubmit = async (type) => {
        if(!Text) return alert("Please enter a prompt");
    
        try {
          setClassifying(true);
    
          const response = await fetch('http://localhost:8080/api/v1/dalle', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Text,
            })
          })
    
          const data = await response.json();
    
          console.log(data);
        } catch (error) {
          alert(error)
        } finally {
          setClassifying(false);
          
        }
      }
    

    return(
        <><div>
        <input
          type="text"

          value={Text}
          onChange={(e) => setText(e.target.value)} />
      </div><div>
          <button onClick={handleSubmit}>Send</button>
        </div></>
    )
}
export default WriteMessage;
