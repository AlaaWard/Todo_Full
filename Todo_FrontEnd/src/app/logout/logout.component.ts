import { Component, OnInit } from '@angular/core';
import { HardcodedAuthinticationService } from '../service/hardcoded-authintication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(public HardcodedAuthinticationService2: HardcodedAuthinticationService) { }
  ngOnInit(): void {
    this.HardcodedAuthinticationService2.loggedout()
  }

}
