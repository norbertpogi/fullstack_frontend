import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome Message';
  name = '';
  welcomeMessage: any;

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

   getWelcomeMessage() {
    console.log(this.service.executeHelloWoBeanService());
    this.service.executeHelloWoBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
     );
     console.log('...... last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response) {
    console.log('............... ', response.message);
    this.welcomeMessage = response.message;
  }

}
