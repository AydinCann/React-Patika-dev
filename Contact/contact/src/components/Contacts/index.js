import {useState, useEffect} from 'react'
import List from "./List"
import Form from "./Form"
import "./styles.css";

function Contacts() {
    const[contacts, setContacts] = useState([

        {
            fullname:"Can",
            phone_number:"1234"
        },
        {
            fullname:"Buket",
            phone_number:"789"
        },
        {
            fullname:"Çisem",
            phone_number:"05483"
        }
    ]);

    useEffect(()=>{
        console.log(contacts);

    },[contacts]);
    
  return (
    <div id="container">
    <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
    
  )
}

export default Contacts