import { Injectable } from '@angular/core';

declare var Eth: any;
declare var TestRPC: any;

declare var Web3: any;

@Injectable()
export class EthereumProviderService {

    EthInstance: any;

    Web3: any;

    constructor() {
        this.EthInstance = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
     }
}
