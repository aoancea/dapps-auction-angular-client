import { Injectable } from '@angular/core';

declare var Eth: any;
declare var TestRPC: any;

declare var Web3: any;

@Injectable()
export class EthereumProviderService {

    Eth: any;

    private Web3: any;

    constructor() {
        this.Eth = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
     }
}
