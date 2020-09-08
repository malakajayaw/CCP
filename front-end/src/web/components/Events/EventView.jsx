import React from 'react';

function EventView() {
    return (<div>
        <section className="content" >
      <div className="card">
        <div className="card-header">
        <div className="row">
        <div className="col-6">
          <h3 className="card-title">Event Details</h3>
          </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 order-1 order-md-1">
            <img className="mb-4 shadow-lg bg-white rounded w-100" alt="Event Banner" src={__dirname+"images/Events/event4.jpg"} style={{float:"left", maxWidth:"100%", maxHeight:"300px" }} />
         
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">Date<i className="far fa-calendar-alt ml-2"></i></span>
                        <span className="info-box-number text-center text-muted mb-0">Sep 30,2020</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">Time<i className="far fa-clock ml-2"></i></span>
                      <span className="info-box-number text-center text-muted mb-0">04:30 PM to 9:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-12 col-sm-12">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">Venue<i className="fas fa-map-marker-alt ml-2"></i></span>
                      <span className="info-box-number text-center text-muted mb-0">Bandaranayake Memorial International Conference Hall, Bauddhaloka Mawatha, Colombo 00700</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row info-box bg-light">
                <div className="col-12 px-4">
             
              <h3 className="text-primary mt-3 mb-3">Congress 2019 </h3>
              <div className="text-muted">
                <p className="text-md"><i className="fas fa-bullhorn"></i> <b>Young Professionals</b>
                </p>
              </div>
              <p className="text-muted" style={{lineHeight:"2"}}>
              YP LETs Talks is one of the key events of the IEEE Young Professionals Sri Lanka Section which brings together young professionals representing each and every domain of engineering. The YP team’s target is to create a platform between young professionals and prominent speakers to share their success stories, input tips and guidelines to reach the zenith through the theme Road to Success.
              <br/> <br/>
This year’s first session will be "How to Invest in Share Market" targeting to widening and strengthening the knowledge and attitudes of the participants about Share Market Investments. The audience will comprise of recent graduates and young professionals from technical backgrounds.
<br/> <br/>
Awaits to meet the motivated and enthusiastic individuals to get most out of this inspiring opportunity by eminent professionals.
<br/> <br/>
Registration fee of 500 LKR will be charged for Non-IEEE members and free entry for IEEE Members. (Payment details for non-members will be informed later)
         
              </p>
              
                </div>
              </div>
            </div>
    
            <div className="col-12 col-md-12 col-lg-4 order-2 order-md-2">
             <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnAo1ZYa9_9U17CtsOtf6XG2A8ONW9eIvdQdjIPhc7IGWIFw/viewform?embedded=true" title="registrationForm" width="100%"  height="100%" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </div>
          </div>
        </div>
        {/* <!-- /.card-body --> */}
      </div>
      {/* <!-- /.card --> */}
    
    </section>
    </div>
    );
 }

export default EventView;
