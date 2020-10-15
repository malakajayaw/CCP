import React , {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from '../Common/NavBar';
import Footer from '../Common/Footer';
import Background from "../../images/Registration.jpg";

import { useForm } from "react-hook-form";

import { add_member_requset} from '../../controllers/memeber.controller'
import Config from '../../controllers/config.controller'
const UserProfile = (props) => {
  const { register, handleSubmit } = useForm();

 
  let [member, setMember] = useState({ 
    addfname : '' , 
    addlname : '' ,
    addmname : '' ,
    addmnumber : '' ,
    addpemail : '' ,
    addoemail : '' ,
    addphone : '' ,
    addpassword : '' ,
    addcpassword : '' ,

    // editmnumber : '' ,
    // editfname : '' ,
    // editlname : '' ,
    // editpemail : '' ,
    // editphone : '' ,
    
  });


  const onSubmit =  async (e) => {

    // alert(JSON.stringify(member))
    e.preventDefault()
    const result = await add_member_requset (member)
    console.log(result);
    if(result.code == 200)
    {
      clear()
      Config.setToast("Request sent successfully")
    }



  }

  const add = () => {
    console.log("Add");
    setMember({
      addfname : 'Prabhasha' , 
      addlname : 'Amarathunga' ,
      addmname : 'Prabhasha Amarathunga' ,
      addmnumber : '20204646' ,
      addpemail : 'prabhasha.amarathunga@gmail.com' ,
      addoemail : 'prabhasha.amarathunga@ieee.com' ,
      addphone : '0716401842' ,
      addpassword : '1234' ,
      addcpassword : '1234' ,
    })
  }

  const clear = () => {
    console.log("Clear call");
    setMember({
      addfname : '' , 
      addlname : '' ,
      addmname : '' ,
      addmnumber : '' ,
      addpemail : '' ,
      addoemail : '' ,
      addphone : '' ,
      addpassword : '' ,
      addcpassword : '' ,
    })
  }

  const handleChange =  (e) =>  {
     setMember({...member, [e.target.name]: e.target.value });
  }

  return (

  <section className="content" style={{ display: props.display }}>
    <NavBar/>
    <div >
    <div className="container-fluid" >

      <div className="card" style={{
              background: `url(${Background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
        <div className="card-header">


          <b>User Profile</b>

          <Link to="/MemberLogin" type="button" className="btn btn-info btn-sm float-right add_btn">Logout</Link>
        

        </div>
        <div className="card-body">

          <section>
            <div className="row justify-content-md-center">
             
                  
                <form onSubmit={onSubmit}>


                  <div className="card-body">
                    <div className="form-group">
                    <label >First Name</label>
                      <input type="text" className="form-control" required name="addfname"  
                      value={member.addfname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" className="form-control" required name="addlname"
                       onChange={handleChange}
                       
                       value={member.addlname}/>
                    </div>

                    <div className="form-group">
                      <label for="inputMName">Name as per the Membership Card</label>
                      <input type="text" id="inputMName" className="form-control"  required name="addmname"
                      onChange={handleChange}
                      value={member.addmname}/>
                    </div>

                    <div className="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" className="form-control" required name="addmnumber"
                      onChange={handleChange}
                      value={member.addmnumber}/>
                    </div>

                    <div className="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" className="form-control" required  name="addpemail"
                      onChange={handleChange}
                      value={member.addpemail}/>
                    </div>

                    <div className="form-group">
                      <label for="inputOEmail">IEEE Email</label>
                      <input type="text" id="inputOEmail" className="form-control"  required name="addoemail"
                      onChange={handleChange}
                      value={member.addoemail}/>
                    </div>

                    <div className="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" className="form-control" required name="addphone" 
                      onChange={handleChange}
                      value={member.addphone}/>
                    </div>

                    <div className="form-group">
                      <label for="inputPassword">Password</label>
                      <input type="password" id="inputPassword" className="form-control" required name="addpassword"
                      onChange={handleChange}
                      value={member.addpassword}/>
                    </div>

                    <div className="form-group">
                      <label for="inputCPassword">Confirm Password</label>
                      <input type="password" id="inputCPassword" className="form-control" name="addcpassword"
                      onChange={handleChange}
                      
                      value={member.addcpassword}
                      />
                    </div>
                    <div className="row">
                      <div className="col-12">
                         <button type="button" className="btn btn-primary mr-2 my-2" onClick={clear}>Cancel</button>
                        <button type="submit"  className="btn btn-success float-right" >Update </button>
                        <button type="button"  className="btn btn-primary mr-2 my-2mr-2 my-2" onClick={add} >Demo</button>
                      </div>
                    </div>

                  </div>
                </form>

                </div>


           

          </section>


        </div>
      </div>
    </div>
    </div>
    <Footer/>
  </section>
  );

}

export default UserProfile;
