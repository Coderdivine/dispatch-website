import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";

function Agent() {
    const {id} = useParams();
    const parse_id = JSON.parse(id)
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[location,setLocation]=useState("");
    const[age,setAge]=useState("");
    const[password,setPassword]=useState("");
    const[passwordTwo,setPasswordTwo]=useState("");
    const[nin,setNin]=useState("");
    const[data,setData]=useState([]);
    const handleSubmit=(e)=>{
     e.preventDefault();
     const arr = {firstname,lastname,email,phone,location};
  setData([...data,arr]);
  console.log(data);
 // window.location = `/admin/${data}`
    }
    const date =  new Date();
        const m_date = date.getDate();
    const handleAccept=(Aname,Cname,location,destination,amount,date)=>{
        
       const arr =[{Aname,Cname,location,destination,amount,date}];
       console.log(arr)
       window.location = `/admin/${JSON.stringify(arr)}`
    

    }




   
    return (
        <div>
           <p> Agent userinterface;</p>
           <div className="container" id="agent-container">
            <form>
           <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder='Enter your firstname'/>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" placeholder='Enter your lastname'/>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter your username'/>
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="date" placeholder='Enter your date of birth'/>
            <input value={nin} onChange={(e)=>setNin(e.target.value)} type="number" placeholder='Enter your NIN'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your password'/>
            <input value={passwordTwo} onChange={(e)=>setPasswordTwo(e.target.value)} type="password" placeholder='Confirm password'/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your Email'/>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Enter your phone'/>
            <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder='Enter your location'/>
           <button onClick={(e)=>handleSubmit(e)}>Add agent</button>
        </form>
           </div>
           <div className="cotainer" id="cus-container">
              {id && parse_id.filter((x)=>x.location == location).map((x)=><div key={x.firstname}>
              <h1>{x.firstname} {x.lastname}</h1>
                  <p>{x.username},{x.amount}</p>
                  <p>{x.phone},{x.email}</p>
                  <p>{x.location}, {x.destination}</p>
                  <button onClick={()=>handleAccept(username,x.username,x.location,x.destination,x.amount,m_date)}>Accept</button>
              </div>)}
           </div>
        </div>
    )
}

export default Agent
