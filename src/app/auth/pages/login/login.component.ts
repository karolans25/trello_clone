import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';


@Component({
  selector: 'app-login',
  imports: [
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
