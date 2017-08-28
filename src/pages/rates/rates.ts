import { Component, OnInit } from '@angular/core';

// add the rxjs observable operators
import '../../app/rxjs-operators';
import { DetailComponent } from './detail';
import { NavController } from 'ionic-angular';
import { Currency } from '../../app/currency';
import { CurrencyService  } from '../../app/currency.service';

const CURRENCIES:Currency[] = [
    { code: 'AUD', text: 'Australian Dollar', selected: true,ticker:null},
    { code: 'BRL', text: 'Brazilian Real', selected: false,ticker:null },
    { code: 'CAD', text: 'Canadian Dollar', selected: true,ticker:null },
    { code: 'CNY', text: 'Chinese Yuan', selected: true,ticker:null},
    { code: 'EUR', text: 'Euro', selected: true,ticker:null },
    { code: 'GBP', text: 'British Pound Sterling', selected: true,ticker:null },
    { code: 'IDR', text: 'Indonesian Rupiah', selected: false,ticker:null },
    { code: 'ILS', text: 'Israeli New Sheqel', selected: false,ticker:null },
    { code: 'MXN', text: 'Mexican Peso', selected: true,ticker:null },
    { code: 'NOK', text: 'Norwegian Krone', selected: false,ticker:null },
    { code: 'NZD', text: 'New Zealand Dollar', selected: false,ticker:null },
    { code: 'PLN', text: 'Polish Zloty', selected: false,ticker:{}},
    { code: 'RON', text: 'Romanian Leu', selected: false,ticker:null },
    { code: 'RUB', text: 'Russian Ruble', selected: true,ticker:null },
    { code: 'SEK', text: 'Swedish Krona', selected: false,ticker:null },
    { code: 'SGD', text: 'Singapore Dollar', selected: false,ticker:null},
    { code: 'USD', text: 'United States Dollar', selected: true,ticker:null },
    { code: 'ZAR', text: 'South African Rand', selected: false,ticker:null }
  ];

@Component({
  selector: 'rates-page',
  templateUrl: 'rates.html',
  providers: [ CurrencyService ]
})



export class RatesPage implements OnInit  {
  errorMessage: string;
  arrCurrencies:any;
  currencies : Currency[];
  mode = 'observable';
  title = 'Current Rates';

  ngOnInit() {this.getCurrenciesFromApi();}

  currencySelected() {
    this.navCtrl.push(DetailComponent);
  };

  getCurrenciesFromApi() {
    this.currencyService.getCurrencies()
                        .subscribe(
                        function(tickers) {
                          let arr = new Array();
                          CURRENCIES.forEach(function(currency) {
                            currency.ticker = tickers[currency.code];
                            arr.push(currency);
                          });
                          return arr;
                        },
                        //curremcies =>this.currencies = Array.from(curremcies),
                        error =>this.errorMessage = <any>error,)
  } 

  constructor(public navCtrl: NavController, private currencyService: CurrencyService ) {

  };


}
