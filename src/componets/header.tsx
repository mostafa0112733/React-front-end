import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid col-auto">
            <FontAwesomeIcon icon={faShoppingCart} style={{height:50,}}className="mx-5"></FontAwesomeIcon>
            <img
              src="./assets/stores_ar.jpg"
              className="mx-5"
              alt=""
            />
            <img
              src="./assets/hotline.jpg"
              className="mx-5"
              alt=""
            />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <button
                  className="btn  btn-outline-success "
                  style={{ backgroundColor: "orange", color: "white" }}
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <img src="./assets/logo.png" alt="" className="mx-5" />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
