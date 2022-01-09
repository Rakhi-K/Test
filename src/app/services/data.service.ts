import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


//Dummy Data
  data: any = [
    { name: "Rahul", email: "rahul123@gmail.com", phone: "9876543213" },
    { name: "Venu", email: "venu324@yahoo.com", phone: "7896521466" },
    { name: "Sam", email: "sam432@orkut.com", phone: "6958473214" }
  ]

  constructor() { }

  //***For details in LocalStorage***
  saveDetails() {
    if (this.data) {
      localStorage.setItem("data", JSON.stringify(this.data))
    }
  }

  //***For Submitting or Registering the form***
  register(name:any, email:any, phone:any) {
    let database = this.data
    if (email in database) {
      return false
    }
    else {
      database.push({
        name, email, phone
      })
      this.saveDetails()
      return true
    }
  }





}





