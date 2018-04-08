import { TestBed, inject } from '@angular/core/testing';

import { EthereumProviderService } from './ethereum-provider.service';

describe('EthereumProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EthereumProviderService]
    });
  });

  it('should be created', inject([EthereumProviderService], (service: EthereumProviderService) => {
    expect(service).toBeTruthy();
  }));
});
