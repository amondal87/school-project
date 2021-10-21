import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const Signup = () => {
const history = useHistory();
const [user, setUser] = useState ({
    name:"", email:"", phone:"", password:"", cpassword:""
})

//let name, value;
const handelUserInput = (e) => {
//console.log(e);
let name = e.target.name;
let value = e.target.value;
//console.log(value);
setUser({...user, [name] : value});

}

const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

if (name && email && phone && password && (password === cpassword)){
    
    const res = await fetch ("/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name, email, phone, password, cpassword
        })
    });

    const data = await res.json();
    alert("Registration successfull");
    console.log(data);
    //history.push("/login");
} else {
    alert("invalid Registration!")
}



  
}


    return (
<section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6">
                        <div className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Sign Up</h1>
                        </div>
                        <form method="POST" name="register" className="form">
                    <div className="input-control">
                        <label className="input-label" hidden>Name</label>
                        <input type="text" autoComplete="off" name="name" id="name" className="input-field" 
                         value={user.name}
                         onChange={handelUserInput}
                         placeholder="Enter Full Name" />
                    </div>
				<div className="input-control">
					<label className="input-label" hidden>Email Address</label>
					<input type="email" autoComplete="off" name="email" id="email" className="input-field" 
                     value={user.email}
                     onChange={handelUserInput}
                     placeholder="Enter Email Address" />
				</div>
                <div className="input-control">
					<label className="input-label" hidden>Phone Number</label>
					<input type="text" autoComplete="off" name="phone" id="phone" className="input-field" 
                     value={user.phone}
                     onChange={handelUserInput}
                     placeholder="Enter Phone Number" />
				</div>
				<div className="input-control">
					<label className="input-label" hidden>Password</label>
					<input type="password" autoComplete="off" name="password" id="password" className="input-field" 
                     value={user.password}
                     onChange={handelUserInput}
                     placeholder="Enter Password" />
				</div>
				<div className="input-control">
					<label className="input-label" hidden>Confirm Password</label>
					<input type="password" autoComplete="off" name="cpassword" id="cpassword" className="input-field" 
                     value={user.cpassword}
                     onChange={handelUserInput}
                     placeholder="Enter Confirm Password" />
				</div>
                <div className="input-control">
					<input type="button" onClick={postData} name="submit" className="input-submit" value="Sign Up" />
				</div>
			</form>
            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Signup
