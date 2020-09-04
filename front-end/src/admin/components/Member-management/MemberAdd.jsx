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
      Config.setToast("Request sent successfully")
    }



  }

  const handleChange =  (e) =>  {
     setMember({...member, [e.target.name]: e.target.value });
  }

  return (<section className="content" style={{ display: props.display }}>
    <div className="container-fluid">
    <h6>Member Management</h6>
      <div className="card">
        <div className="card-header">

          <Link to="/MemberRequest" type="button" className="btn btn-success btn-sm float-right add_btn">Requests</Link>

        </div>
        <div className="card-body">

          <section class="content">
            <div class="row justify-content-md-center">
              <div class="col-md-6">
                <div class="card card-success">
                  <div class="card-header">
                    <h3 class="card-title">Add New Member</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    </div>
                  </div>
                <form onSubmit={onSubmit}>


                  <div class="card-body">
                    <div class="form-group">
                    <label >First Name</label>
                      <input type="text" className="form-control" name="addfname"  
                        onChange={handleChange}
                      />
                    </div>

                    <div class="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" class="form-control" name="addlname"
                       onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputMName">Name as per the Membership Card</label>
                      <input type="text" id="inputMName" class="form-control" name="addmname"
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" class="form-control" name="addmnumber"
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" class="form-control" name="addpemail"
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputOEmail">IEEE Email</label>
                      <input type="text" id="inputOEmail" class="form-control" name="addoemail"
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" class="form-control" name="addphone" 
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputPassword">Password</label>
                      <input type="password" id="inputPassword" class="form-control" name="addpassword"
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputCPassword">Confirm Password</label>
                      <input type="password" id="inputCPassword" class="form-control" name="addcpassword"
                      onChange={handleChange}/>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        {/* <button type="button" class="btn btn-secondary">Cancel</button> */}
                        <button type="submit"  class="btn btn-success float-right" >Create Member Profile </button>
                      </div>
                    </div>

                  </div>
                </form>

                </div>


              </div>


              
              <div class="col-md-6">
                <div class="card card-info">
                  <div class="card-header">
                    <h3 class="card-title">Manage Members</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i class="fas fa-minus"></i></button>
                    </div>
                  </div>

                  <form onSubmit={onSubmit}>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" class="form-control" name="editmnumber" 
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputFName">First Name</label>
                      <input type="text" id="inputFName" class="form-control" name="editfname" 
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" class="form-control" name="editlname" 
                      onChange={handleChange}/>
                    </div>

                    <div class="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" class="form-control" name="editpemail" 
                      onChange={handleChange}/>
                    </div>

              

                    <div class="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" class="form-control" name="editphone" 
                      onChange={handleChange}/>
                    </div>

                

                    <div class="row">

                      <div class="col-12">
                        <a href="#" class="btn btn-secondary">Cancel</a>
                        <button type="submit"  class="btn btn-success float-right" > Update </button>
                        <button type="submit"  class="btn btn-success float-right" > Delete </button>
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
