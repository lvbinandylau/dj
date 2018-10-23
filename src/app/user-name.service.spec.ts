import { TestBed, inject } from '@angular/core/testing';

import { UserNameService } from './user-name.service';

describe('UserNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNameService]
    });
  });

  it('should be created', inject([UserNameService], (service: UserNameService) => {
    expect(service).toBeTruthy();
  }));
});
