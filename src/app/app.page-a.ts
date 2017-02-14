import { Component } from '@angular/core';
import {  foodService } from './app.mynameservice';


export class FoodItem {
    id: number;
    name: string;
     mfg: string;
     pkg: string;
     qty: number;
}

@Component({
    template:`<ul><li *ngFor="let fooditem of foodItems">
	       <a routerLink="/detail/{{fooditem.id}}/{{fooditem.name}}" routerLinkActive="active">{{fooditem.name}}</a></li></ul>`,
           providers: [foodService]
})
export class PageAComponent {
    foodItems = Array<any>();
    _myDataService: foodService;

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(myDataService: foodService) {
        // Store local reference to MyDataService.
        this._myDataService = myDataService;
        this.getSomeData();
    }

    getSomeData() {
        this._myDataService.getNames()
            // Subscribe to changes in the observable object
            // that is returned by getRemoteData.
            .subscribe(
            // You basically get three handlers.
            // 1. Handle successful data.
            data => {
                this.foodItems = data
                console.log(JSON.stringify(data))
            },
            // 2. Handle error.
            error => {
                alert(error)
            },
            // 3. Execute final instructions when successful.
            () => {
                console.log("Finished")
            });
    }
    

 }






/////////////////

// export class AppComponent {
//     myNames: Array<any>;
//     _myDataService: MyNameService;

//     // Since we are using a provider above we can receive 
//     // an instance through an instructor.
//     constructor(myDataService: MyNameService) {
//         // Store local reference to MyDataService.
//         this._myDataService = myDataService;
//     }

//     getSomeData() {
//         this._myDataService.getNames()
//             // Subscribe to changes in the observable object
//             // that is returned by getRemoteData.
//             .subscribe(
//             // You basically get three handlers.
//             // 1. Handle successful data.
//             data => {
//                 this.myNames = data
//                 console.log(JSON.stringify(data))
//             },
//             // 2. Handle error.
//             error => {
//                 alert(error)
//             },
//             // 3. Execute final instructions when successful.
//             () => {
//                 console.log("Finished")
//             });
//     }
// }


/////////////////


// var FOODITEMS: FoodItem[] = [
//     { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
//     { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
//     { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
//     { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
// ];
