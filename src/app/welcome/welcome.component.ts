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
    //console.log(this.service.executeHelloWoBeanService());
    this.service.executeHelloWoBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
     );
     //console.log('...... last line of getWelcomeMessage');
  }

  getWelcomeMessageById() {
    this.service.executeHelloBeanServiceWithId(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  handleSuccessfulResponse(response) {
    this.welcomeMessage = response.message;
  }
  handleErrorResponse(error) {
    // console.log('1111111111111111111111 ', error);
    // console.log('22222222222222222222 ', error.error);
    // console.log('33333333333333333333 ', error.error.message);
    this.welcomeMessage = error.error.message;

  }

}
