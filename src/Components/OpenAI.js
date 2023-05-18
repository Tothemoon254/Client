import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai"


console.log(process.env.REACT_APP_OPEN_AI_API_KEY)
    
function SentimentClassifier() {
    const [text, setText] = useState("");
    const [embedding, setEmbedding] = useState("");
    const p = "Classify the text as either nice or mean";
    const openAi = new OpenAIApi(
        new Configuration({
          apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
        })
      )
 
 
 
    const createEmbedding = async (text) => {
      const result = await openAi.createCompletion("code-davinci-001", {
        text: text,
        temperature: 0.1,
        prompt: p,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.5,
      });
      return result;
    };
    
 
  
    
    
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const result = await createEmbedding(text);
      setEmbedding(result);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Text:
            <input type="text" value={text} onChange={handleTextChange} />
          </label>
          <button type="submit">Generate Embedding</button>
        </form>
        {embedding && (
          <div>
            <h3>Embedding:</h3>
            <p>{JSON.stringify(embedding)}</p>
          </div>
        )}
      </div>
    );
  
}; 
  export default SentimentClassifier;

  