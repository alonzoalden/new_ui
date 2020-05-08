import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FooterDisplayService {
    showFooter: BehaviorSubject<any>;
    constructor() {
        this.showFooter = new BehaviorSubject({});
    }
    onShowFooter(value: boolean) {
        this.showFooter.next(value);
    }
}
