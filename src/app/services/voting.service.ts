import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../models/candidate';
import { MockData } from '../models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  constructor() { }

  getCandidates(): Observable<Candidate[]> {
    return of(MockData)
  }
  
}
