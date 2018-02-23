import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'user-component',
  templateUrl: `user.component.html`,
})
export class UserComponent  { 
    data:any[];
    constructor()
{
//this.userDetails();
}

public userDetails(){
   this.data = [
        {id: 5, name: 'Roger'},
        {id: 5, name: 'Mark'},
        {id: 5, name: 'Zach'},
        {id: 5, name: 'Mark'},
        {id: 5, name: 'Roger'},
      ];
}
}
