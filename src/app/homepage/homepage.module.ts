import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    // CommonModule
  ],
  exports: [ HomepageComponent]
})
export class HomepageModule { }
