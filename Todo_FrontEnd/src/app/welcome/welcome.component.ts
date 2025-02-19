import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { responsemassege, WelcomeDataService } from '../service/data/welcome-data.service';
import { ErrorComponent } from '../error/error.component';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent implements OnInit {
  name = ""
  responcemessage = ""

  constructor(private rr: ActivatedRoute, private ss: WelcomeDataService) { }
  ngOnInit(): void {
    this.name = this.rr.snapshot.params['namew']

  }
}
//   getwelcomemessagewithparameter() {
//     this.ss.executeHalloworldBeanservicewithpath().subscribe
//       (response => {this.handelsussecfulresponce(response)
//        console.log("true")},
//         error => this.handelerrorresponce(error)
//       );
//   }

//   handelsussecfulresponce(response: responsemassege) {
    
//     this.responcemessage = response.message;
//   }
//   handelerrorresponce(error: HttpErrorResponse) {
//     this.responcemessage = error.error.message;

//   }
// }
