const SearchBox = () => {
  return (
    <form
      action="submit"
      className="bg-gray-100 rounded-md flex flex-1 justify-between items-center gap-4 p-2"
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className=" outline-none bg-transparent flex-1 "
      />

      <button>
        <img src="./search.png" alt="search" className="w-4 " />
      </button>
    </form>
  );
};

export default SearchBox;
