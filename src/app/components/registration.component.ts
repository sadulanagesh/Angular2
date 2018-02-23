import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'registration-component',
    templateUrl: `registration.component.html`,
    // styleUrls:
})
export class RegistrationComponent {
    constructor() {
        //this.userDetails();
    }
    type = 'doughnut';
    data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    options = {
      responsive: true,
      maintainAspectRatio: false
    };
}
