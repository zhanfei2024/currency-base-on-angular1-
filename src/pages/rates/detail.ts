import { Component } from '@angular/core';
import { HistoryComponent } from './history';
import { NavController } from 'ionic-angular';

@Component ({
    template:
    `
    <ion-header>
        <ion-navbar  color="danger">
            <ion-title>
            Detail for {{currency.code}}
            </ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content>
        <ion-list>
            <ion-item>Last<ion-badge item-right color="light">{{currency.ticker.last}}</ion-badge></ion-item>  
            <ion-item>Ask<ion-badge item-right>{{currency.ticker.ask}}</ion-badge></ion-item>  
            <ion-item>Bid<ion-badge item-right color="secondary">{{currency.ticker.bid}}</ion-badge></ion-item>  
            <ion-item>24h Average<ion-badge item-right color="danger">{{currency.ticker['24_avg']}}</ion-badge></ion-item>  
            <ion-item>24h Volume<ion-badge item-right color="dark">{{currency.ticker.totao_vol| number:2}}</ion-badge></ion-item>  
            <button ion-item  (click)="gotoHistory()">View History</button> 
        </ion-list>
    </ion-content>
    <ion-footer color="danger">
        <ion-toolbar>
            <ion-title>Updated </ion-title>
        </ion-toolbar>
    </ion-footer>
    `

})

export class DetailComponent {
    gotoHistory() {
        this.navCtrl.push(HistoryComponent);
    }
    constructor(public navCtrl: NavController ) { };
}