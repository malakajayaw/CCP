import React from 'react';

function Carousel() {
   return (<div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
          <div className="view">
            <img className="d-block w-100" style={{maxWidth:"100%", maxHeight:"500px" ,minHeight:"500px"}}src="images/Events/event6.jpg"
              alt="Third slide" />
            <div className="mask rgba-black-slight"></div>
          </div>
          <div className="carousel-caption">
          </div>
        </div>
        <div className="carousel-item">
          <div className="view">
            <img className="d-block w-100" style={{maxWidth:"100%", maxHeight:"500px" , minHeight:"500px"}} src="images/Events/event5.jpg"
              alt="Second slide" />
            <div className="mask rgba-black-slight"></div>
          </div>
          <div className="carousel-caption">
          </div>
        </div>
        <div className="carousel-item ">
          <div className="view">
            <img className="d-block w-100" style={{maxWidth:"100%", maxHeight:"500px" , minHeight:"500px"}} src="images/Events/event4.jpg"
              alt="First slide"/>
            <div className="mask rgba-black-slight"></div>
          </div>
          <div className="carousel-caption">
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>);
}

export default Carousel ;
