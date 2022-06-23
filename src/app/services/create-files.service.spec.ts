import { TestBed } from '@angular/core/testing';

import { CreateFilesService } from './create-files.service';

describe('CreateFilesService', () => {
  let service: CreateFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
