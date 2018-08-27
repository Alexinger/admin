import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HttpService]
})
export class HomeComponent {

  user: User = new User(); // данные вводимого пользователя
  receivedUser: User; // полученный пользователь
  done = false;

  constructor(private httpService: HttpService) {}

  submit(user: User) {
    this.httpService.postData(user)
                    .subscribe(
                      (data: User) => {this.receivedUser = data; this.done = true; },
                      error => console.log(error)
                    );
    }
}
