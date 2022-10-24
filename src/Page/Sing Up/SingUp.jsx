import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './singup.css'
import fblogo from '../../images/icons/fb.png'
import gglogo from '../../images/icons/google.png'
import toast ,{Toaster} from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Context'
const SingUp = () => {
  const {createUser , updateUserProfile , googleLogin , facebookLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit =(e)=>{
      e.preventDefault();
      const form = e.target;
      const userName = form.name.value;
      const photoUrl = form.photourl.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      if(password !== confirmPassword){
        toast.error('password are not same')
        return
      }
      if(password.length < 6){
        toast.error('password must be > 6')
        return
      }
      if(password.length === ''){
        toast.error("password Can't be empty ")
        return
      }
      createUser(email,password)
      .then(result=>{
          updateUserProfile(userName,photoUrl)
          toast.success('Verification Email Sent')
      })
      .catch(error =>{
        toast.error(error.message)
      })
      .finally(()=>{
        navigate('/login')
      })
  }
  const  handleGoogleLogin =()=>{
    googleLogin()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate('/')

    }).catch((error) => {
      const errorMessage = error.message;
  toast.error(errorMessage);
    });
  }

  const handleFacebookLogin  =  ()=>{
    facebookLogin()
    .then((result) => {
      navigate('/')

    }).catch((error) => {
      const errorMessage = error.message;
  toast.error(errorMessage);
    });
  }

  return (
    <div>
      <div className='mainLoginDiv'>
    <div className='loginDiv'>
    <Toaster position="top-center" reverseOrder={false} />

    <h4>Create An Account</h4>
      
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='User Name' name='name' required/><br /><br />
      <input type="text" placeholder='Photo Url' name='photourl'  /><br /><br />
      <input type="email" placeholder='Email' name='email' required  /><br /><br />

      <input type="password" placeholder='Password' name='password' required  /><br /><br />
      <input type="password" placeholder='Confirm Password' name='confirmPassword' required /><br /><br />

      <input type="submit" className='loginButton' value="Sing Me Up" />
      </form>
      
      <p className='text-center rhds mt-3'>Allready Have an Account ? <Link to='/login'>login</Link></p>

      <p className='text-center mt-4 h5'>or</p>
      <button className='sclButton' onClick={handleFacebookLogin}><img src={fblogo} alt="" className='logoImges' /> Coutinue with Facebook</button>
      <button className='sclButton' onClick={handleGoogleLogin}> <img src={gglogo} alt=""  className='logoImges'/> Coutinue with Google</button>
    </div>


    </div>
    </div>
  )
}

export default SingUp
