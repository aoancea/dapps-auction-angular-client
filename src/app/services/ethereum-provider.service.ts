import { Injectable } from '@angular/core';

declare var Eth: any;
declare var TestRPC: any;

@Injectable()
export class EthereumProviderService {

    EthInstance: any;

    constructor() {
        this.EthInstance = new Eth(TestRPC.provider());
     }
}
