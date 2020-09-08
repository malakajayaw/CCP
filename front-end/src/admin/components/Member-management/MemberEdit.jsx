import React , {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import { useForm } from "react-hook-form";

import { add_member_requset} from '../../controllers/memeber.controller'
import Config from '../../controllers/config.controller'
const MemberAdd = (props) => {
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

  return (<section className="content" style={{ display: props.display }}>
    <div className="container-fluid">
    <h6>Update Member Details</h6>
      <div className="card">
        <div className="card-header">

       
          <Link to="/Admin/MemberList" type="button" className="btn btn-info btn-sm float-right add_btn">Active Members</Link>
        

        </div>
        <div className="card-body">

          <section class="content">
            <div class="row justify-content-md-center">
              <div class="col-md-6">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Edit Details</h3>
                  </div>
                <form onSubmit={onSubmit}>


                  <div class="card-body">
                    <div class="form-group">
                    <label >First Name</label>
                      <input type="text" className="form-control" required name="addfname"  
                      value={member.addfname}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" class="form-control" required name="addlname"
                       onChange={handleChange}
                       
                       value={member.addlname}/>
                    </div>

                    <div class="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" class="form-control" required name="addmnumber"
                      onChange={handleChange}
                      value={member.addmnumber}/>
                    </div>

                    <div class="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" class="form-control" required  name="addpemail"
                      onChange={handleChange}
                      value={member.addpemail}/>
                    </div>

                    <div class="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" class="form-control" required name="addphone" 
                      onChange={handleChange}
                      value={member.addphone}/>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <button type="button" class="btn btn-secondary" onClick={clear}>Cancel</button>
                        <button type="submit"  class="btn btn-success float-right" >Create Member Profile </button>
                      </div>
                    </div>

                  </div>
                </form>

                </div>


              </div>
            </div>

          </section>


        </div>
      </div>
    </div>
  
  </section>);

}

export default MemberAdd;
