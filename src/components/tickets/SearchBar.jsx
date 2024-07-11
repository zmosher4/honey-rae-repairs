export const SearchBar = ({ setSearchTerm, setShowEmergencyOnly }) => {
  return (
    <div className="filter-bar">
      <button
        className="filter-btn btn-primary"
        onClick={() => {
          setShowEmergencyOnly(true);
        }}
      >
        Emergency
      </button>
      <button
        className="filter-btn btn-info"
        onClick={() => {
          setShowEmergencyOnly(false);
        }}
      >
        Show All
      </button>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="search tickets"
        className="ticket-search"
      />
    </div>
  );
};
