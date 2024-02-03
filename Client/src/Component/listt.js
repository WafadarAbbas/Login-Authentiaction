import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Listt = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    // Fetch data from data.json when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-form-data');
      setFormDataList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Form Data List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {formDataList.map((formData, index) => (
          <li key={index} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{formData.name}</h2>
            <p className="text-gray-700 mb-2">Contact: {formData.contact}</p>
            <p className="text-gray-700">{formData.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listt;
