import {useState,useEffect} from 'react'

function Form({addContact, contacts}) {

    const initialFromValues= {fullname:"", phone_number:""};

    const [form, setForm] = useState(initialFromValues);

    useEffect(()=>{

        setForm(initialFromValues);

    },[contacts])

    const onChangeInput =(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        if (form.fullname === ""|| form.phone_number === ""){
            return false;
        }
        addContact([...contacts , form]);

        
        
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput}></input>
        </div>
        <div>
        <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}></input>
        </div>
        <div className='btn'>
            <button>Add</button>
        </div>
        

    </form>
  )
}

export default Form
