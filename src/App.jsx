import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function App() {
  const [showModels, setShowModels] = useState(true);
  const [message, setMessage] = useState("Welcome to Royal Enfield!");
  const messageRef = useRef(null);
  const toggleModels = () => {
    setShowModels(!showModels); 
  };

  const changeMessage = () => {
    setMessage("Experience the Power of Royal Enfield ⚡");
  };
   useEffect(() => {
    console.log("Message updated:", message);
    alert("Welcome message changed!"); 
  }, [message]); 

  
  return (
    <div className="bg-gray-50 text-gray-900">
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">Royal Enfield</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-red-500">Home</a></li>
          <li><a href="#" className="hover:text-red-500">About</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>

      <section className="text-center bg-gray-300 bg-center">
        <div className="bg-gray bg-opacity-60 py-20">
          <h2 className="text-4xl font-bold text-black mb-4">
            Ride With Royal Power
          </h2>
          <p className="text-gray-800 mb-6">{message}</p>

          <div className="space-x-4">
            <button
              onClick={changeMessage}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >Change Message </button>

            <button
              onClick={toggleModels}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              {showModels ? "Hide Models" : "Show Models"}
            </button>
          </div>
        </div>
      </section>

      {showModels && (
        <section className="py-10 text-center">
          <h3 className="text-3xl font-bold mb-8">Popular Models</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 hover:shadow-lg transition">
              <img src="abt.jpg" alt="Classic 350" className="rounded mb-4 mx-auto h-40 object-cover" />
              <h4 className="text-xl font-bold mb-2">Classic 350</h4>
              <p className="text-gray-700">Timeless style with modern performance.</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="03.jpg" alt="Interceptor 650" className="rounded mb-4 mx-auto h-40 object-cover" />
              <h4 className="text-xl font-bold mb-2">Interceptor 650</h4>
              <p className="text-gray-700">Pure twin-cylinder joy for every rider.</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="abt2.jpg" alt="Himalayan 450" className="rounded mb-4 mx-auto h-40 object-cover" />
              <h4 className="text-xl font-bold mb-2">Himalayan 450</h4>
              <p className="text-gray-700">Built to conquer every mountain road.</p>
            </div>
          </div>
        </section>
      )}

    <footer className="bg-black text-gray-500 py-6 text-center">
        <p>© 2025 Royal Enfield. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
