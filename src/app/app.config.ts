import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, Title, withEventReplay } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {  
  constructor(private readonly title: Title) {    
    super();  
  }  
  
  override updateTitle(routerState: RouterStateSnapshot) {    
    const title = this.buildTitle(routerState);    
    if (title !== undefined) {      
      this.title.setTitle(`My Application | ${title}`);    
    }  
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    {
      provide: TitleStrategy, useClass: TemplatePageTitleStrategy
    }
  ]
};
