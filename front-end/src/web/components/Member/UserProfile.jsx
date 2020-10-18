import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import { Modal } from "react-bootstrap";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FilePond, registerPlugin } from "react-filepond";
import { toast } from "react-toastify";
import { uploadProfilePic } from "../../controllers/memeber.controller";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import img_default from "../../images/img.jpg";
import Config from "../../controllers/config.controller";
class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      addfname: "",
      addlname: "",
      addmname: "",
      addmnumber: "",
      addpemail: "",
      addoemail: "",
      addphone: "",
      addpassword: "",
      addcpassword: "",
      finalProflilePic: null,
      showProfilepicModal: false,
      files: null,
      profilepic: null,
      picsrc: "",
    };
  }

  check_auth = () => {
    const cheeck_auth = this.props.auth.isAuthenticated;
    console.log(cheeck_auth);
    if (!cheeck_auth) this.props.history.push("/MemberLogin");
  };

  componentDidMount() {
    console.log(this.props.auth);
  }
  componentWillMount() {
    this.check_auth();
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  showProfilePicModal() {
    this.setState({ showProfilepicModal: true });
  }
  setErrorToast(msg) {
    toast.error(msg, {
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  }

  setToast(msg) {
    toast(msg, {
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  }

  async handleProfilePic(e) {
    e.preventDefault();
    if (this.state.files != null || this.state.files != undefined) {
      console.log(this.state.files[0]);
      var status = await uploadProfilePic(
        this.state.files[0],
        this.props.auth.user.memberShipNo
      );
      switch (status) {
        case 200:
          await this.setState({ showProfilepicModal: false });
          await this.check_auth();
          this.setToast("Updated");

          return 0;
        case 401:
          this.setErrorToast("Something went wrong");
          break;
        default:
          this.setErrorToast("Something went wrong");
          break;
      }
    } else {
      alert("Please select profile picture");
    }
  }

  render() {
    console.log(this.state.profilepic);
    console.log(this.state.picsrc);
    const user = this.props.auth.user;
    console.log(user);

    return (
      <section className="content">
        <NavBar />
        <div className="container">
          <div className="row my-2">
            <div className="col-lg-8 order-lg-2">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href
                    data-target="#profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href
                    data-target="#messages"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Messages
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href
                    data-target="#edit"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Change Password
                  </a>
                </li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h5 className="mb-3">User Profile</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Membership Number</h6>
                      <p>
                        <input
                          disabled
                          value={user.memberShipNo}
                          className="form-control"
                          type="text"
                        />
                      </p>
                      <h6>Name</h6>
                      <p>
                        <input
                          disabled
                          className="form-control"
                          value={user.fname + "  " + user.lname}
                          type="text"
                        />
                      </p>
                      <h6>Affiliation</h6>
                      <p>
                        <input
                          disabled
                          className="form-control"
                          value={"SLIIT Student Branch"}
                          type="text"
                        />
                      </p>
                      <h6>Email</h6>
                      <p>
                        <input
                          disabled
                          className="form-control"
                          value={user.email}
                          type="text"
                        />
                      </p>
                      <h6>Contact No.</h6>
                      <p>
                        <input
                          disabled
                          className="form-control"
                          value={user.contactNo}
                          type="text"
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h6>Reward Points</h6>
                      <a href="#" className="badge badge-dark badge-pill">
                        10
                      </a>
                      <hr />
                    </div>
                    <div className="col-md-12">
                      <h5 className="mt-2">
                        <span className="fa fa-clock-o ion-clock float-right" />
                        Activity
                      </h5>
                      <table className="table table-sm table-hover table-striped">
                        <tbody>
                          <tr>
                            <td>
                              <strong>{user.fname}</strong> was the President of{" "}
                              <strong>SLIIT Student Branch</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>{user.fname}</strong> volunteered in the
                              event <strong>IEEE Annual Gathering</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
                <div className="tab-pane" id="messages">
                  <div className="alert alert-info alert-dismissable">
                    <a className="panel-close close" data-dismiss="alert">
                      ×
                    </a>{" "}
                    This is an <strong>.alert</strong>. Use this to show
                    important messages to the user.
                  </div>
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            3 hrs ago
                          </span>{" "}
                          Here is your a link to the latest summary report from
                          the..
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            Yesterday
                          </span>{" "}
                          There has been a request on your account since that
                          was..
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            9/10
                          </span>{" "}
                          Porttitor vitae ultrices quis, dapibus id dolor. Morbi
                          venenatis lacinia rhoncus.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            9/4
                          </span>{" "}
                          Vestibulum tincidunt ullamcorper eros eget luctus.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="float-right font-weight-bold">
                            9/4
                          </span>{" "}
                          Maxamillion ais the fix for tibulum tincidunt
                          ullamcorper eros.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane" id="edit">
                  <form role="form">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Membership Number
                      </label>
                      <div className="col-lg-9">
                        <input
                          disabled
                          value={user.memberShipNo}
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Current password
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        New Password
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Confirm password
                      </label>
                      <div className="col-lg-9">
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    {/*====================================================================*/}
                    {/*============================== Models ==============================*/}
                    {/*====================================================================*/}

                    {/*===============================================*/}
                    {/*=============== Profile Picture ===============*/}
                    {/*===============================================*/}
                    <Modal
                      size="lg"
                      show={this.state.showProfilepicModal}
                      centered
                      onHide={() =>
                        this.setState({ showProfilepicModal: false })
                      }
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Change Profile Picture</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <form>
                          <div className="IS_UI_ProfilepicModal">
                            <p>
                              Select a photo of you to set as your profile
                              picture.
                            </p>
                            <center>
                              <FilePond
                                ref={(ref) => (this.pond = ref)}
                                files={this.state.files}
                                allowMultiple={false}
                                allowImageCrop={false}
                                // imageCropAspectRatio="1:1"
                                acceptedFileTypes={["image/*"]}
                                oninit={() => this.handleInit()}
                                onupdatefiles={(fileItems) => {
                                  // Set currently active file objects to this.state
                                  this.setState({
                                    files: fileItems.map(
                                      (fileItem) => fileItem.file
                                    ),
                                  });
                                }}
                              ></FilePond>
                              <button
                                className="btn btn-success"
                                onClick={(e) => this.handleProfilePic(e)}
                              >
                                Set as Profile Picture
                              </button>
                            </center>
                          </div>
                        </form>
                      </Modal.Body>
                    </Modal>

                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          type="reset"
                          className="btn btn-secondary"
                          defaultValue="Cancel"
                        />
                        <input
                          type="button"
                          className="btn btn-primary"
                          defaultValue="Submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1 text-center">
              <img
                src={
                  user.profilepic == undefined
                    ? img_default
                    : `${Config.host}${Config.port}/${user.profilepic}`
                }
                style={{ width: "50%" }}
                className="mx-auto img-fluid img-circle d-block"
                alt="avatar"
              />

              <h6 className="mt-2">Upload a different photo</h6>
              <label className="custom-file">
                <button
                  onClick={() => this.showProfilePicModal()}
                  className="btn btn-success"
                >
                  {" "}
                  <span className="custom-file-control">Choose file</span>{" "}
                </button>
              </label>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth || {},
});

export default connect(mapStateToProps, null)(withRouter(UserProfile));
