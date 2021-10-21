import React from 'react'

const Login = () => {
    return (
            <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                        <div class="wrapper">
                        <div class="heading">
                            <h1 class="text text-large">Sign In</h1>
                            <p class="text text-normal">New user? <span><a href="#" class="text text-links">Create an account</a></span>
                            </p>
                        </div>
                        <form name="login" class="form">
				<div class="input-control">
					<label for="email" class="input-label" hidden>Email Address</label>
					<input type="email" autoComplete="off" name="email" class="input-field" placeholder="Email Address" />
				</div>
				<div class="input-control">
					<label for="password" class="input-label" hidden>Password</label>
					<input type="password" autoComplete="off" name="password" class="input-field" placeholder="Password" />
				</div>
				<div class="input-control">
					<a href="#" class="text text-links">Forgot Password</a>
					<input type="button" name="submit" class="input-submit" value="Login" />
				</div>
			</form>
            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default Login
