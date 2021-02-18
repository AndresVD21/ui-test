import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../models/candidate';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCandidates() {
    return this.firestore.collection<Candidate>('candidates').snapshotChanges();
  }

  addVoteToCandidate(id: string, data: Candidate) {
    return this.firestore.collection('candidates').doc(id).set(data);
  }
  
}
