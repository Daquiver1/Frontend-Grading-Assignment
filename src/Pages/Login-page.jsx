import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/header';


const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
   
    navigate('/dashboard');
    
  }
  return (
    <>
    <Header></Header>
    <section id="banner"><h2>Login</h2></section>
      <section id="main" class="container medium">
        <div class="box">
        <img src='/ug_standard_new_sl_1.png'></img>
						<form onSubmit={handleSubmit}>
							<div class="row gtr-50 gtr-uniform">
								<div class="col-12">
									<input type="text" name="studentId" id="studentId"  placeholder="Student Id" />
      					</div>
								<div class="col-12">
									<input type="password" name="pin" id="pin" placeholder="Pin" />
								</div>
                <div class="col-12">
									<ul class="actions special">
										<li><input type="submit" value="Login" /></li>
									</ul>
					      </div>
              </div>
			    	</form>
					</div>
      </section>
    </>
  )
}

export default Login
