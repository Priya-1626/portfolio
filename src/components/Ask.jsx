import { useState } from "react";
import { motion } from "framer-motion";

const Ask = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log('Success:', data);
  
      if (response.ok) {
        // Show success message
        setIsSubmitted(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000); // Refresh after 3 seconds
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="mt-10 p-4 bg-neutral-800 rounded-md w-full max-w-sm mx-auto"
    >
      {isSubmitted ? (
        <div className="text-green-500 text-center">
          <h3 className="text-xl mb-2">Your Question has been submitted successfully!</h3>
          <p>Refreshing the page...</p>
        </div>
      ) : (
        <>
          <h3 className="text-2xl text-white text-center mb-4">Ask a Question</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-neutral-700 text-white rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-neutral-700 text-white rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-white">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-neutral-700 text-white rounded-md"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
};

export default Ask;
