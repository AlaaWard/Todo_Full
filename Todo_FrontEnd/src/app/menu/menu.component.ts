import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HardcodedAuthinticationService } from '../service/hardcoded-authintication.service';
@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit {
  // isuserlogin: boolean = false;
  constructor(public HardcodedAuthinticationService1: HardcodedAuthinticationService) { }
  ngOnInit(): void {
    // this.isuserlogin = this.HardcodedAuthinticationService1.isuserlogedin()
  }

}
