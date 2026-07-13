import Input from "../components/Input";
import Button from "../components/Button";
import { useReducer } from "react";
import UserProfileContext from "../context/UserProfileContext";
import { useContext } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'setname':
    return {
      ...state, name: action.payload
    }
    case 'setemail':
    return {
      ...state, email: action.payload
    }
    default:
      return state
  }
}

function UserProfile() {
  const initialState = {
    name: '',
    email: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const {setUser} = useContext(UserProfileContext)
  return (
    <div className="d-flex flex-column">
      <h2 className="settings-title ms-4 mt-4 fw-bold">Settings:</h2>
      <p className="settings-text fs-5 fw-bold ms-4 mt-4">User Profile</p>
      <label htmlFor="username" className="label ms-4">username
        <Input type="text" placeholder="Enter your username" className="input p-1" onChange={(e) => dispatch({type: 'setname', payload: e.target.value})}></Input>
      </label>
      <label htmlFor="email" className="label ms-4 py-4">Email
        <Input type="email" placeholder="Enter your email" className="input p-1"  onChange={(e) => dispatch({type: 'setemail', payload: e.target.value})}></Input>
      </label>
      <Button className="user-btn rounded-5 fs-5 ms-4" onClick={() => {setUser(state)} }>Update</Button>
    </div>
  );
}

export default UserProfile;
