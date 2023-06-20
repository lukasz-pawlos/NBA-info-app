import { Link } from "react-router-dom"

const NavBar = () => {
        return (

<div className="px-3 py-2 text-bg-dark bg-dark">
<div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
  <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-2">
    <i className="bi bi-activity "></i>
    NBA app
  </a>
  <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
    <Link className="text-white text-decoration-none" to="/">
      <li className="px-3 d-flex flex-wrap flex-column align-items-center">
        <i className="bi bi-house mx-auto mb-1 " ></i>
        Home
      </li>
    </Link>
    <Link className="text-white text-decoration-none" to="/players">
      <li className="px-3 d-flex flex-wrap flex-column align-items-center">
        <i className="bi bi-people"></i>
        Players
      </li>
    </Link>
    <Link className="text-white text-decoration-none" to="/teams">
      <li className="px-3 d-flex flex-wrap flex-column align-items-center">
        <i className="bi bi-diagram-3"></i>
        Teams
      </li>
    </Link>
    <Link className="text-white text-decoration-none" to="/favs">
      <li className="px-3 d-flex flex-wrap flex-column align-items-center">
      <i className="bi bi-hand-thumbs-up"></i>
        Fav
      </li>
    </Link>
  </ul>
</div>
</div>

        )}
export default NavBar