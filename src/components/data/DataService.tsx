// DataService.js
const getData = async () => {
    try {
      const response = await fetch('/data.json'); // Assuming data.json is in the public folder
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading data:', error);
      return null;
    }
  };
  
  export default getData;
  