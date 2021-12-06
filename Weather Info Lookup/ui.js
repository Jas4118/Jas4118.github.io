class UI {
    constructor() {
      this.uiContainer = document.getElementById("info");
      this.city;
      this.defaultCity = "New York";
    }
  
    populateUI(data) {
  
      this.uiContainer.innerHTML = `        
          <div>
            units=imperial
              <div>
                  <h3> ${data.name}</h3>
                  <h4> High: ${data.main.temp_max}. Low: ${data.main.temp_min}</h4>
                  <h5>It currently feels like ${data.main.feels_like} and the humidity is at ${data.main.humidity} in ${data.name}.</h5>              
              </div>
          </div>        
          `;
    }
}