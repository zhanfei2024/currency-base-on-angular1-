import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CurrenciesPage } from '../pages/currencies/currencies';
import { HistoryPage } from '../pages/history/history';
import { RatesPage } from '../pages/rates/rates';
import { DetailComponent } from '../pages/rates/detail';
import { HistoryComponent } from '../pages/rates/history';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    CurrenciesPage,
    HistoryPage,
    RatesPage ,
    DetailComponent,
    HistoryComponent,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CurrenciesPage,
    HistoryPage,
    RatesPage ,
    DetailComponent,
    HistoryComponent,
    TabsPage,
     
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
