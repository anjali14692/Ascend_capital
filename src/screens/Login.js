import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import {useHistory} from 'react-router-dom'

export default function Login({setLoginUser}) {

  const history = useHistory()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9002/login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          history.push("/")
        })
    }

  return (
   
    <div> <Navbar/>
    <div className='mt-5'>
      <div className='container '>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 mb-2'>
            <h2 className='text-center'>LogIn Here</h2>
            <div className='card-body'>
              <form>
                
                <div className='form-group mb-2'>
                  <label className='form-label'>Email Address</label>
                  <div>
                  <input 
                       type="Email"
                       placeholder='Enter Email address'
                       name="email"
                        className='form control'
                        //value={Image}
                        //onChange={(e) => setImage(e.target.value)} 
                         >
                   </input> 
                   </div>
                   </div>
                   <div className='form-group mb-2'>
                   <label className='form-label'>Password</label>
                   <div>
                   <input 
                       type="password"
                       placeholder='Enter Password '
                       name="Label"
                        className='form control'
                        //value={Label}
                        //onChange={(e) => setLabel(e.target.value)} 
                         >
                   </input> 
                   </div>
                </div>
                
                <Link className="btn text-white bg-success mx-1" to="/taskboard">Submit</Link>
                <br></br>
                Don't Have an Account!!
                <Link to="/signup" className=" mx-2 ml-2">Signup</Link>
              </form>
              
              </div> 

          </div>

        </div>

      </div>
      </div>
    
    </div>

  )
}
