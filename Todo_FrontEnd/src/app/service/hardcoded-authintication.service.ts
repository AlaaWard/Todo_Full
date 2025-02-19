import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthinticationService {

  constructor() { }
  authenticate(username: string, pass: string) {
    if (username === "alaaward" && pass === "ward") {
      sessionStorage.setItem("authenticaterUser", username)
      return true;
    }
    else return false;
  }
  isuserlogedin() {
    let user = sessionStorage.getItem("authenticaterUser")
    return !(user === null)
  }
  loggedout() {
    sessionStorage.removeItem("authenticaterUser")
  }
}





