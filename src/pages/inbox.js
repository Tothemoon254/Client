import react from 'react';
import { useEffect, useState } from 'react';
import { auth } from '../firebase.config';
import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  
} from "firebase/firestore";



function inbox(){
    const user = auth();
    const userID = user.id;
    const collectionRef = collection(db, userID);
    const [Messages, setMessages] = useState([]);


    useEffect(() => {
        const getAllMessages = async () => {
            const data = await getDocs(collectionRef);
            setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        };

        getAllMessages();
    }, []);
    <div>
    {Messages.map((message) => {
      return ( 
      <div className="grid grid-cols-4 ] mt-[60px]">


 
         <h1> {message.stringValue}</h1>



      </div>
);
})}       
  </div>  




}
export default inbox;