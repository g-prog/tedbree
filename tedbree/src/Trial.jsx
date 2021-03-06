
import React, { useEffect, useState } from 'react'
function Trial() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://61d06278cd2ee50017cc984f.mockapi.io/tedbree").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`https://61d06278cd2ee50017cc984f.mockapi.io/tedbree/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
        setEmail(item.email)
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,email}
    console.warn("item",item)
    fetch(`https://61d06278cd2ee50017cc984f.mockapi.io/tedbree/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div className="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />

        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default Trial;