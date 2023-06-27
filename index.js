function submitData(data) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      })
      .catch(function (error) {
        alert("Error Incurred!");
        console.log(error.message);
      });
  }
  
  // Example usage
  const data = { name: "Clive", email: "clivemoyia@gmail.com" };
  submitData(data);