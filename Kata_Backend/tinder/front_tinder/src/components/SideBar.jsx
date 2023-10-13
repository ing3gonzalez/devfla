import { Link } from "react-router-dom";


export default function SideBar () {
    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{'width': '280px'}}>

    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
      <Link to={`home`}>Home</Link>
      </li>
      <li>
      <Link to={`talentos`}>Talentos</Link>
      </li>
      <li>
      <Link to={`empresas`}>empresas</Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>

    </div>
  </div>
};