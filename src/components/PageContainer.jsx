export default function PageContainer() {

  return (
    <div>
      <div className="brand">
        <img src="src\assets\gt_studios_large_nb.png" width="237px" className="header-logo" alt="Guardtower Studio logo" data-sizes="auto"></img>

      </div>

      <div>
        {/* Navigation */}
        <nav id="topNav" className='navbar navbar-dark navbar-expand-lg' style={{ backgroundColor: "#212529" }}>
          {/* This line stick nav bar at top but overlaps brand logo */}
        {/* <nav id="topNav" className='navbar navbar-dark navbar-expand-lg fixed-top' style={{ backgroundColor: "#212529" }}> */}
          <div className="container-fluid" >

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" id="myLinks">

                <a className="nav-link" href="#about">About</a>

                <a className="nav-item nav-link" href="#home">Home</a>

                <a className="nav-item nav-link" href="#contact">Contact</a>

              </div>
            </div>
          </div>
        </nav>


      </div>

      {/* Body */}
      <main className="mx-3">
        {/* About */}
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pictureframe">
              {/* Image here */}
            </div>
            </div>
            <div className="col">
            <div className="pictureframe">
              {/* Image here */}
            </div>
            </div>
            <div className="col">
            <div className="pictureframe">
              {/* Image here */}
            </div>
            </div>
          </div>
        </div>
        
        {/* Home */}

        <div className="container">
          <div className="row">
            <div className="col">
              {/* Image here */}
            </div>
            <div className="col">
              {/* Image here */}
            </div>
            <div className="col">
              {/* Image here */}
            </div>
          </div>
        </div>

        {/* Games */}

        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Image here */}
            </div>
            <div className="col">
              {/* Image here */}
            </div>
          </div>
        </div>

        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Image here */}
            </div>
            <div className="col">
              {/* Image here */}
            </div>
          </div>
        </div>

        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Image here */}
            </div>
            <div className="col">
              {/* Image here */}
            </div>
          </div>
        </div>

       {/* Contact */}

        
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Image here */}
            </div>

          </div>
        </div>

        <br />
        <a href="#myLinks" className="back" style={{paddingBottom:0}}>back to top</a>
        <br />

      </main>
    </div>

  );



};

