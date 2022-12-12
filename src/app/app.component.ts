import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'pages' + ".farm" , url: '/folder/Farm', icon: 'leaf' },
    { title: 'pages' + ".store" , url: '/folder/Store', icon: 'storefront' },
    { title: 'pages' + ".farms" , url: '/folder/Farmlist', icon: 'rose' },
    { title: 'pages' + ".creator" , url: '/folder/Creator', icon: 'add' },
    { title: 'pages' + ".about" , url: '/folder/About', icon: 'skull' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [/*'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'*/];
  constructor(
    private translate:TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  changeLanguage(lng:string){
    this.translate.setDefaultLang(lng)
  }


}
