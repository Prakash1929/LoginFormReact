import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);

  let submitform = (e) => {
    e.preventDefault();
 if(user && pass){
  const newdata = { id:new Date().getTime().toString() , user: user, pass: pass };
  setData([...data, newdata]);
  setUser(""); 
  setPass(""); 
 }
 else{
  alert("someting is wrong plss make sure all fileds are done ✅")
 }
  };

  return (
    <>
      <form onSubmit={submitform}>
        <div className="parent">
          <div className="child">
            <label>Username</label> <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              autoComplete="off"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <label>Password</label> <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
      <div className="Show">{
        data.map((item)=>{
          let {user,pass,id}=item
        
          return (
            <>
           <div key={id}>
           <h2>Username is :{user}</h2>
            <span>Password is :{pass}</span>
           </div>
            </>
          )
        })
      }</div>
    </>
  );
};

export default Form;
