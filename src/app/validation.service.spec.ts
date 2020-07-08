import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validateCredential funtion is created', () => {
    expect(service.validateCredentials).toBeTruthy();
  });

  it('Test validateCredential functionality', ()=>{
    expect(service.validateCredentials("admin1234", "12345678")).toBeTruthy();
  })

  it('Test validateCredential functionality (Negative test)', ()=>{
    expect(service.validateCredentials("xyz123", "1234567")).toBeFalsy();
  })

});
