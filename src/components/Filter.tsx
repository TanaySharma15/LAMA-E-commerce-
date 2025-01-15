const Filter = () => {
  return (
    <div className="flex justify-between pt-10">
      <div className="flex gap-8 flex-wrap">
        <select
          name="Type"
          id=""
          className="outline-none bg-gray-200 rounded-full p-2 "
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="number"
          placeholder="min price"
          className="outline-none border-2 rounded-full"
        />
        <input
          type="number"
          placeholder="max price"
          className="outline-none border-2 rounded-full"
        />
      </div>
      <div>
        <select name="" id="" className="border-2 rounded-full  p-2">
          <option>Sort By</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
