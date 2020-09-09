import React , {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import { useForm } from "react-hook-form";

import { update_member} from '../../controllers/memeber.controller'
import Config from '../../controllers/config.controller'
const MemberEdit = (props) => {

  const id = useParams()
  const { register, handleSubmit } = useForm();

 
  let [member, setMember] = useState({ 


    editmnumber : '' ,
    editfname : '' ,
    editlname : '' ,
    editpemail : '' ,
    editphone : '' ,
    
  });


  const onSubmit =  async (e) => {

    // alert(JSON.stringify(member))
    e.preventDefault()
    const result = await update_member (member, id)
    console.log(result);
    if(result.code == 200)
    {
      Config.setToast("Update  successfully")
    }



  }

//  const getData = async  (id) =>{
//       const result = await
//  }

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

          <section className="content">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="card card-success">
                  <div className="card-header">
                    <h3 className="card-title">Edit Details</h3>
                  </div>
                <form onSubmit={onSubmit}>


                  <div className="card-body">
                    <div className="form-group">
                    <label >First Name</label>
                      <input type="text" className="form-control" required name="addfname"  
                      value={member.editfname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label for="inputLName">Last Name</label>
                      <input type="text" id="inputLName" className="form-control" required name="addlname"
                       onChange={handleChange}
                       
                       value={member.editlname}/>
                    </div>

                    <div className="form-group">
                      <label for="inputMNumber">Membership Number</label>
                      <input type="text" id="inputMNumber" className="form-control" required name="addmnumber"
                      onChange={handleChange}
                      value={member.editmnumber}
                      readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label for="inputPEmail">Email (Used for IEEE Registration)</label>
                      <input type="email" id="inputPEmail" className="form-control" required  name="addpemail"
                      onChange={handleChange}
                      value={member.editpemail}/>
                    </div>

                    <div className="form-group">
                      <label for="inputPhone">Contact No.</label>
                      <input type="text" id="inputPhone" className="form-control" required name="addphone" 
                      onChange={handleChange}
                      value={member.editphone}/>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        {/* <button type="button" className="btn btn-secondary" onClick={clear}>Cancel</button> */}
                        <button type="submit"  className="btn btn-success float-right" >Update Member Profile </button>
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

export default MemberEdit;
