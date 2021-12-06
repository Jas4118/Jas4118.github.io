class Fetch {
    //Used to get results, async is used so that await can be used
    async getCurrent(input) {
      //Api key
      const myKey = "fd825a979088c48b4d8f65b37b17e516";
      //fetch for the info from api
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`);

      const data = await response.json();
      //returns information for site
      return data;
    }
  }
