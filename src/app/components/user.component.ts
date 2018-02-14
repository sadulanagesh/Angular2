import { Component } from '@angular/core';

@Component({
  selector: 'user-component',
  template: `user.component.html`,
})
export class UserComponent  { 
    constructor()
{
//this.userDetails();
}

public userDetails(){
    alert("apple")
}
}
