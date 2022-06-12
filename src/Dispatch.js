import React, { useState,useEffect } from 'react'

function Dispatch() {
    const data =[];
    const one_km = "6.7";
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[destination,setDestination]=useState("");
    const[location,setLocation]=useState("");
    const[amount,setAmount]=useState("3500");
    const[distance,setDistance]=useState("");
    const[select,setSelect]=useState(null);
    const[pays,setPays]=useState(true);
    useEffect(() => {
     if(select !== "PAY STACK" && select !== null){
      setPays(true)
     }else{
setPays(false)
     }
    }, [select])
    const handleSubmit=(e)=>{
e.preventDefault();
const arr = {firstname,lastname,email,phone,location,destination,amount,distance};
data.push(arr)
window.location = `/agent/${JSON.stringify(data)}`;
    }
    const handlePays=()=>{
        handleSubmit()
            }
    return (
        <div>
            <p>Fill in Details</p>
            <form>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" placeholder='Enter your firstname'/>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" placeholder='Enter your lastname'/>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter your username'/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your Email'/>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Enter your phone'/>
            <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder='Enter your location'/>
            <input value={destination} onChange={(e)=>setDestination(e.target.value)} type="text" placeholder='Enter your destination'/>
            <select onChange={(e)=>{
             const selected = e.target.value;
             setSelect(selected)
             console.log(select)
                }}>
                    <option value="ON DELIVERY">ON DELIVERY</option>
                    <option value="PAY STACK">PAY STACK</option>
                </select>
                <p>{select}</p>
                {
                pays?
                <div>
                 <button onClick={(e)=>handleSubmit(e)}>Send order</button>
                </div>:
                <div>
                 <button onClick={()=>handlePays()}>Paywith Paystack</button>

                </div>
                }
              
            </form>
        </div>
    )
}

export default Dispatch
