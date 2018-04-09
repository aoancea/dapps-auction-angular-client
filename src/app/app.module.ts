import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';

import { EthereumProviderService } from './services/ethereum-provider.service';
import { JsAuctionComponent } from './js-auction/js-auction.component';

const routes = [
    { path: 'auction', component: AuctionComponent },
    { path: 'js-auction', component: JsAuctionComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        AuctionComponent,
        JsAuctionComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [EthereumProviderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
