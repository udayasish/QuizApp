import axios from "axios";

export const fetchQuizData = async () => {
    try {
      const res = await axios.get('/api/Uw5CrX');
      console.log("Full API Response:", res.data);
      
      if (!res.data || !res.data.questions) {
        throw new Error("Invalid API response structure");
      }
  
      return res.data.questions; // Ensure this is an array
    } catch (err) {
      console.error("Failed to fetch quiz data:", err);
      return []; // Return empty array to prevent crashes
    }
  };
  