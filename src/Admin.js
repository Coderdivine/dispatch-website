import React from 'react'
import {useParams} from "react-router-dom";


function Admin() {
    const {id} = useParams();
    const parse_id = JSON.parse(id)

    return (
        <div>
            Admin page;
            <div className="cotainer" id="cus-container">
              {id && parse_id.map(({Aname,Cname,location,destination,amount,date})=>
              <div key={date}>
              <h1>Agent:{Aname} ,Customer: {Cname}</h1>
                  <p>Location: {location},Destination: {destination}</p>
                  <p>Amount: {amount},Date: {date}</p>
              </div>)}
           </div>
        </div>
    )
}

export default Admin
