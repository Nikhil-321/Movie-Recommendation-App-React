import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
const UserSignup = () => {
  const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email:"",
        password: "",
        phone: "",
        genre: "",
        age: "",
        favouriteActor: ""
    })
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const res = await UserService.userSignup(user)
            console.log("res", res)
            navigate("/login")
        } catch (error) {
            console.log("error", error)
        }
    }


  return (
    <div>
      <div className="container w-50 bg-light mt-5 px-4 py-4">
        <h3>Signup Form</h3>
        <form onSubmit={submitForm} className="mt-2">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input value={user.name} onChange = {(e) => setUser({...user, name: e.target.value})} type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange = {(e) => setUser({...user, email: e.target.value})}
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
            onChange = {(e) => setUser({...user, password: e.target.value})}
              type="password"
              className="form-control"
              placeholder="********"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input onChange = {(e) => setUser({...user, phone: e.target.value})} type="number" className="form-control" placeholder="Mobile" />
          </div>

          <div className="mb-3">
            Please answer the following questions to enhance your experience
          </div>

          <div className="mb-3">
          <label>Select your favourite genre</label>
            <select onChange = {(e) => setUser({...user, genre: e.target.value})} className="form-select" aria-label="Default select example">
              <option value="1">Action</option>
              <option value="2">Horror</option>
              <option value="3">Rom-Com</option>
              <option value="4">Drama</option>
            </select>
          </div>

          <div className="mb-3">
          <label>Favourite Actor</label>
            <select  onChange = {(e) => setUser({...user, favouriteActor: e.target.value})} defaultValue= "" className="form-select" aria-label="Default select example">
              <option value="" disabled>Choose your favourite actor</option>
              <option value="1">Sharukh Khan</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Please enter your age</label>
            <input
            onChange = {(e) => setUser({...user, age: e.target.value})}
              type="number"
              className="form-control"
              placeholder="Age"
            />
          </div>

          <button className="btn btn-success" type="Submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
