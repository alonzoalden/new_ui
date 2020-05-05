import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, AfterViewInit {
    @ViewChild('scrollContainer') scrollContainerEl: ElementRef;
    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    ngOnInit() {
        if (this.scrollContainerEl) {
            setTimeout(() => {
                console.log(this.scrollContainerEl.nativeElement);
                this.scrollContainerEl.nativeElement.scrollTop = -200;
            }, 1000);
        }
    }
    ngAfterViewInit() {
        this.scrollContainerEl.nativeElement.scrollTop = 0;
        this.viewportScroller.scrollToPosition([0, 0]);
        // setTimeout(() => document.getElementById('companypage').scrollTop = 0, 100);
        // console.log(document.getElementById('companypage'));
    }

}
