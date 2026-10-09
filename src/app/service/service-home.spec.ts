import { TestBed } from '@angular/core/testing';
import { ServiceHome } from './service-home';

describe('ServiceHome', () => {
  let service: ServiceHome;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHome);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
