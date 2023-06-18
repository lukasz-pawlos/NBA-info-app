import CarouselLogos from "../CarouselLogos";
import SectionInput from "../SectionInput";


const Home = () => {

return (
    <div>
        
<div className="px-3 py-2 text-bg-dark bg-dark">
      <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-2">
          <i className="bi bi-activity "></i>
          NBA app
        </a>  
        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li className="px-3 d-flex flex-wrap flex-column align-items-center">
              <i className="bi bi-house mx-auto mb-1 " ></i>
              Home
          </li>
          <li className="px-3 d-flex flex-wrap flex-column align-items-center">
              <i className="bi bi-heart-pulse"></i>
              Pulse
          </li>
          <li className="px-3 d-flex flex-wrap flex-column align-items-center">
              <i className="bi bi-browser-edge"></i>
              SpO2
          </li>
          <li className="px-3 d-flex flex-wrap flex-column align-items-center">
              <i className="bi bi-gear"></i>
              Settings

          </li>
        </ul>
      </div>
    </div>
    
    <SectionInput></SectionInput>
    <CarouselLogos></CarouselLogos>
    </div>
  );
}

export default Home;