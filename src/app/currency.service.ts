import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Currency } from './currency';
import { Observable } from 'rxjs/observable';


@Injectable()
export class CurrencyService {
    private currencyUrl = 'https://api.bitcoinaverage.com/ticker/all'; // url to web api

    constructor (private http:Http) {}

    getCurrencies(): Observable<Currency[]> {
        return this.http.get(this.currencyUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData (res:Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error : Response | any) {
        // in a real world app , we might use a remote logging infrastructure
        let errMsg : string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }else {
            errMsg = error.messsage?error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

