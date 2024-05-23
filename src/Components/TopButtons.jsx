import React from 'react';

const TopButtons = ({setQuery}) => {
  const cities = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Hyderabad' },
    { id: 3, name: 'Bengaluru' },
    { id: 4, name: 'Kolkata' },
    { id: 5, name: 'Chennai' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-around my-6 gap-2">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={()=>{setQuery({q: city.name})}}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
