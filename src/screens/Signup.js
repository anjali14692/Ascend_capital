import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Signup() {

  const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        location: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, location} = user
        if( name && email && password && location)){
            axios.post("http://localhost:8000/", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

  return (
    <div> <Navbar/>
    <div className='mt-5'>
      <div className='container '>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 mb-2'>
            <h2 className='text-center'>SignUp Here</h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label' > Name</label>
                  <div>
                  <input 
                       type="text"
                       placeholder='Enter Name'
                       name="Name"
                        className='form control'
                        //value={Name}
                        //onChange={(e) => setName(e.target.value)} 
                         >
                   </input> 
                   </div>
                </div>
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
                   <div className='form-group mb-2'>
                   <label className='form-label'>Location</label>
                   <div>
                   <input 
                       type="text"
                       placeholder='Enter location '
                       name="Label"
                        className='form control'
                        //value={Label}
                        //onChange={(e) => setLabel(e.target.value)} 
                         >
                   </input> 
                   </div>
                </div>
                
                <button className='btn btn-success' >Sumbit</button>
                <br></br>
                Already Have An Account!!
                <Link to="/login" className=" mx-2 ml-2">Login</Link>
              </form>
              
              </div> 

          </div>

        </div>

      </div>
      </div>
    
    </div>
  )
}
