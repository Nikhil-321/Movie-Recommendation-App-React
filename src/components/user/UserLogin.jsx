import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";


const UserLogin = () => {

  const navigate = useNavigate()

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const [loginDetails, setLogin] = useState({
    isLoggedIn: false,
    loggedinUser: {}
  })
  const [userState, setUsers] = useState({
    users: []
  })

  const handleLogin = (e) => {
    e.preventDefault()
    const {users} = userState
    const {email, password} = state
    const isCorrect = users.filter(e => e.email === email && e.password === password)
    console.log("isCorrect", isCorrect)
    const x = isCorrect.length ? localStorage.setItem("loggedinUser", JSON.stringify(isCorrect[0])) : ""
    localStorage.getItem("loggedinUser") ? navigate("/movies"): alert("Please login to continue")
    return isCorrect.length ? setLogin({...loginDetails, isLoggedIn: true, loggedinUser: isCorrect[0]}): ""
    
  }


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await UserService.getUsers()
        setUsers(() => ({...userState, users: res.data}))
      } catch (error) {
        console.log("error", error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <div className="container w-50 bg-light mt-5 px-4 py-4">
      <h3>Login Form</h3>
      <form onSubmit={handleLogin} className="mt-2">
      <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={state.email} onChange = {(e) => setState({...state, email: e.target.value})} type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input value={state.password} onChange = {(e) => setState({...state, password: e.target.value})} type="password" className="form-control" placeholder="********" />
          </div>

          <button className="btn btn-success" type="Submit">
            Login
          </button>

      </form>

      </div>
    </div>
  );
};

export default UserLogin;
