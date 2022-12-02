import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'farm' + ".title" , url: '/folder/Farm', icon: 'mail' },
    { title: 'Store', url: '/folder/Store', icon: 'money' },
    { title: 'Farms', url: '/folder/Farmlist', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
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
