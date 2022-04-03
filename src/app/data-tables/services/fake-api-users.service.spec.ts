import { TestBed } from '@angular/core/testing';

import { GithubMoviesService } from './github-movies.service';

describe('GithubMoviesService', () => {
  let service: GithubMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
