import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'user-component',
  templateUrl: `user.component.html`,
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
