import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/kabkota')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">No</th>
            <th className="border border-slate-300 p-2">Nama</th>
            <th className="border border-slate-300 p-2">Latitude</th>
            <th className="border border-slate-300 p-2">Longitude</th>
            <th className="border border-slate-300 p-2">Provinsi</th>
            <th className="border border-slate-300 p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index} className="hover:bg-gray-50">
              <td className="border border-slate-300 p-2">{index + 1}</td>
              <td className="border border-slate-300 p-2">{item.nama}</td>
              <td className="border border-slate-300 p-2">{item.latitude}</td>
              <td className="border border-slate-300 p-2">{item.longitude}</td>
              <td className="border border-slate-300 p-2">{item.nama_provinsi}</td>
              <td className="border border-slate-300 p-2">
                <a href="">Edit</a> | <a href="">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;