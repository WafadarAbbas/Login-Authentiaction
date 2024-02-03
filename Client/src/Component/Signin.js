import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Signin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = () => {

        if (!email || !password) {
           toast.error("Please Fill All Fields!", {
                position: toast.POSITION.TOP_CENTER, 
                autoClose: 2000, 
              });
            return;
        }

        if (password.length < 6) {
            toast.error("Password Length less the 6 !", {
                position: toast.POSITION.TOP_CENTER, 
                autoClose: 2000, 
              });
            return;
        }
        console.log(email, password)
        axios.post('http://localhost:5000/signin',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)


                if (res.data.code === 500) {
                    toast.error("User Not Found!", {
                        position: toast.POSITION.TOP_CENTER, 
                        autoClose: 2000, 
                      });
                }
                if (res.data.code === 404) {
                    toast.error("Password is wrong!", {
                        position: toast.POSITION.TOP_CENTER, 
                        autoClose: 2000, 
                      });
                }
                if (res.data.code === 200) {

                   
                    navigate('/')

                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
         <ToastContainer />
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-md">
        <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm border-2 border-dotted pt-10 pb-10 pl-5 pr-5">
        <h1 className='text-center text-3xl mb-2 font-bold'>Login </h1> <hr className='mb-5 mt-3'/>
        <label className='font-semibold'>Email Address:</label>
          <input className="text-sm mt-2 w-full px-4 py-3 border border-solid border-gray-300 rounded mb-5"  onChange={(e) => { setEmail(e.target.value)}} value={email} type="text" placeholder="Enter Email Address" />
          <label className='font-semibold '>Password</label>
          <input className="text-sm  w-full px-4 py-3 border border-solid border-gray-300 rounded mt-2"  onChange={(e) => { setPassword(e.target.value)   }} value={password} type="password" placeholder="Enter Password" />
          <div className="text-center md:text-center">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-md tracking-wider"  onClick={handleSubmit} type="submit">Login</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/signup'}> SIGN UP </Link>
            {/* <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/forget-pass'}> Forget Password </Link>
                <ToastContainer /> */}
          </div>
        </div>
      </section>
    </>
    )
}


export default Signin