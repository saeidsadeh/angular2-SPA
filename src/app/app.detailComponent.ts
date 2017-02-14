import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import {  foodService } from './app.mynameservice';

@Component({
    template: `ID: {{id}}<br/>
               Name: {{name}}<br/>
               Quantity:{{qty}}<br/>
               `,
               providers: [foodService]
})
export class detailComponent {
    id:number;
    name:string;
    qty:number;
    _myDataService: foodService;
    foodItems = Array<any>();

    constructor(private route: ActivatedRoute,myDataService: foodService) {
        this._myDataService = myDataService;
        this.ngOnInit();
        this.getSomeData();
        
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.id   = params['id'];       
         
        });

    }


    getSomeData() {
        this._myDataService.getNames()
            // Subscribe to changes in the observable object
            // that is returned by getRemoteData.
            .subscribe(
            // You basically get three handlers.
            // 1. Handle successful data.
            data => {
                this.foodItems = data;
                console.log(JSON.stringify(data));
                this.findSelectedFruit(this.id); 
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

    findSelectedFruit(id:number){
        for(var i=0; this.foodItems.length ;i++){
            if(this.foodItems[i].id == id){
               this.id =  this.foodItems[i].id;
                this.name = this.foodItems[i].name;
                this.qty = this.foodItems[i].qty; 
            }

        }

    }

}