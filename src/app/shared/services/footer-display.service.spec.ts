import { TestBed } from '@angular/core/testing';

import { FooterDisplayService } from './footer-display.service';

describe('FooterDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooterDisplayService = TestBed.get(FooterDisplayService);
    expect(service).toBeTruthy();
  });
});
