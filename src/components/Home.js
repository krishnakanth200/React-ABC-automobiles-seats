
function Home()
{
    return(
        <div className="container-fluid">
        <div className="p-3 mb-2 bg-info text-dark">
            <section class="py-5 text-center container">
                <div className="row py-lg-5">
                <div classNAme="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">ABC Automobiles</h1>
                    <p className="lead text-muted">Welcome to ABC Automobiles!”<br />
                    <span>“Driven by Excellence, Powered by Passion.”</span></p>
                </div>
                </div>

            </section>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active"height={"60%"}>
                <img src="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  classNAme="img-fluid" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>ABC Automobiles</h5>
                    <p>“Unleash the Road. Embrace the Journey.”</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classNAme="img-fluid" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>ABC Automobiles</h5>
                    <p>“Unleash the Road. Embrace the Journey.”.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" classNAme="img-fluid" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>ABC Automobiles</h5>
                    <p>“Where Performance Meets Elegance.”</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <div>
            <div class="row featurette">
      <div class="col-md-7">
        <br/> <br/>
        <h2 class="featurette-heading">"Adventure Awaits: Our Rugged SUV Fleet” <span class="text-muted"></span></h2><br/>
        <p class="lead">Our SUVs are more than just vehicles—they’re your companions for every adventure. Whether you’re navigating city streets or venturing off-road, our rugged SUV fleet delivers</p>
      </div>
      <div class="col-md-5">
      <figure class="figure">
         <img src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="figure-img img-fluid rounded" alt="..."/>
         
        </figure>
      </div>
    </div>
</div>
<div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div class="col-md-5 order-md-1">
      <img src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="figure-img img-fluid rounded" alt="..."/>
      </div>
    </div>
<div class="card-group">
  <div class="card">
    <img src="https://etimg.etb2bimg.com/thumb/msid-105787189,imgsize-153930,width-1200,height=765,overlay-etauto/auto-technology/evolution-of-vehicle-infotainment-systems-a-technological-odyssey.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Infotainment</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button type="button" class="btn btn-outline-primary">View more</button>
    </div>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Design</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <button type="button" class="btn btn-outline-primary">View more</button>
    </div>
  </div>
  <div class="card">
    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*DhAWalmdXQgLd5-BMUsJKQ.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Performance</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button type="button" class="btn btn-outline-primary">View more</button>
    </div>
  </div>
</div>
    </div>
        
    )
}
export default Home;