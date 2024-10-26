const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => {
    return (
      <div className="p-4 flex border-black text-black justify-center space-x-4">
        <input
          type="text"
          placeholder="Filter by Title"
          className="border p-2 rounded"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by Rating"
          className="border p-2 rounded"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          min="0"
          max="10"
        />
      </div>
    );
  };
  
  export default Filter;