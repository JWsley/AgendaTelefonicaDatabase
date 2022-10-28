import { TestBed } from '@angular/core/testing';

import { ServicosTelService } from './servicos-tel.service';

describe('ServicosTelService', () => {
  let service: ServicosTelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosTelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
