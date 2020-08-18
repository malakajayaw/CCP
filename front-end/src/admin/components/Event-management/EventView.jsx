import React from 'react';

function EventView(props) {
  return ( <section className="content">
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Event Details</h3>

      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
          <i className="fas fa-minus"></i></button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
        <img className="mb-4 shadow-lg bg-white rounded" src="images/Events/event1.jpg" style={{float:"left", maxWidth:"100%", maxHeight:"300px" }}/>
     
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Date<i className="far fa-calendar-alt ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0">March 27, 2018  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Time<i className="far fa-clock ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0"> 5:30 pm to 8:30 pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 col-sm-12">
              <div className="info-box bg-light">
                <div className="info-box-content">
                  <span className="info-box-text text-center text-muted">Venue<i className="fas fa-map-marker-alt ml-2"></i></span>
                  <span className="info-box-number text-center text-muted mb-0">Colombo Stock Exchange Auditorium, World trade Centre, Colombo 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row info-box bg-light">
            <div className="col-12 px-4">
         
          <h3 className="text-primary mt-3 mb-3">IEEE LETs Talk - How to Invest in Share Market </h3>
          <div className="text-muted">
            <p className="text-md"><i class="fas fa-bullhorn"></i> <b>IEEE Young Professionals Sri Lanka</b>
            </p>
          </div>
          <p className="text-muted">
          YP LETs Talks is one of the key events of the IEEE Young Professionals Sri Lanka Section which brings together young professionals representing each and every domain of engineering. The YP team’s target is to create a platform between young professionals and prominent speakers to share their success stories, input tips and guidelines to reach the zenith through the theme Road to Success.

This year’s first session will be "How to Invest in Share Market" targeting to widening and strengthening the knowledge and attitudes of the participants about Share Market Investments. The audience will comprise of recent graduates and young professionals from technical backgrounds.

Awaits to meet the motivated and enthusiastic individuals to get most out of this inspiring opportunity by eminent professionals.

Registration fee of 500 LKR will be charged for Non-IEEE members and free entry for IEEE Members. (Payment details for non-members will be informed later)
          </p>
          
          <h5 className="mt-2 text-muted">Event Volunteers</h5>
          <ul className="list-unstyled">
            <li className="text-secondary">Anuka Jaysundara</li>
            <li className="text-secondary">Prabhasha Amarathunga</li>
            <li className="text-secondary">Maneesha Rajapaksha</li>
            <li className="text-secondary">Malaka Jayawardena</li>
            <li className="text-secondary">Thimithi Weerathunga</li>
          </ul>    
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
          <h3 className="text-primary"><i className="fas fa-paint-brush"></i> AdminLTE v3</h3>
          <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
          <br/>
          <div className="text-muted">
            <p className="text-sm">Client Company
              <b className="d-block">Deveint Inc</b>
            </p>
            <p className="text-sm">Project Leader
              <b className="d-block">Tony Chicken</b>
            </p>
          </div>

          <h5 className="mt-5 text-muted">Project files</h5>
          <ul className="list-unstyled">
            <li>
              <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-file-word"></i> Functional-requirements.docx</a>
            </li>
            <li>
              <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf"></i> UAT.pdf</a>
            </li>
            <li>
              <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-envelope"></i> Email-from-flatbal.mln</a>
            </li>
            <li>
              <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-image "></i> Logo.png</a>
            </li>
            <li>
              <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-file-word"></i> Contract-10_12_2014.docx</a>
            </li>
          </ul>
          <div className="text-center mt-5 mb-3">
            <a href="#" className="btn btn-sm btn-primary">Add files</a>
            <a href="#" className="btn btn-sm btn-warning">Report contact</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /.card-body --> */}
  </div>
  {/* <!-- /.card --> */}

</section>);
}


export default EventView;
