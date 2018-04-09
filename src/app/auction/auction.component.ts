import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auction',
    templateUrl: './auction.component.html',
    styleUrls: ['./auction.component.less']
})
export class AuctionComponent implements OnInit {

    private beneficiary: string = 'Loading ...';
    private raised: string = 'Loading ...';
    private time_left: string = 'Loading ...';

    private highest_bidder: string;
    private highest_bid: string;

    private account_balance: string = 'Loading ...';
    private account_address: string = 'Loading ...';

    constructor() {

    }

    ngOnInit() {

    }

}
