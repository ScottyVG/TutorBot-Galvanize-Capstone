import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Scheduling } from '../pages/scheduling/scheduling';
import { Payment } from '../pages/payment/payment';

@NgModule({
  declarations: [
    MyApp,
    Payment,
    Scheduling
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Payment,
    Scheduling
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
