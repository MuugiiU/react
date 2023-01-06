import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
const Search = () => {
  return (
    <div className="container-fluid">
      <div className="see">
        <img src="./img/logo.png" alt="" />

        <div className="input-group">
          <input
            type="search"
            class="form-control"
            placeholder="Search any things"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-warning">
            Search
          </button>
        </div>
        <div>
          <i class="bi bi-person"></i>
          <span>Sign in</span>
          <Button variant="white" bg="transparent">
            <i class="bi bi-heart"></i>
            <Badge bg="warning">0</Badge>
            <span className="visually-hidden"></span>
          </Button>
          <Button variant="white" bg="transparent">
            {" "}
            <i class="bi bi-cart3 "></i>
            <Badge bg="warning">0</Badge>
            <span className="visually-hidden"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Search;
