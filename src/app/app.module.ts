import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';

const routes = [
    { path: 'auction', component: AuctionComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        AuctionComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
