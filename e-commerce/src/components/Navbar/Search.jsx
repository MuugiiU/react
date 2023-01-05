const Search = () => {
  return (
    <div className="see">
      <div>
        <img src="./img/logo.png" alt="" />
      </div>

      <div className="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search any things"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-warning">
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
