import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { VotingService } from 'src/app/services/voting.service';
import { takeUntil } from 'rxjs/operators';
import { Candidate } from 'src/app/models/candidate';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit, OnDestroy {

  private $destroy: Subject<boolean> = new Subject();

  candidates: Candidate[] = [];

  constructor(
    private votingService: VotingService
  ) { 
    this.getCandidates();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  getCandidates() {
    this.votingService.getCandidates()
      .pipe(takeUntil(this.$destroy))
      .subscribe(dataSnapshot => {
        this.candidates = [];
        dataSnapshot.forEach((candidate) => {
          this.candidates.push({id: candidate.payload.doc.id, ...candidate.payload.doc.data()})
        })
      })
  }

  submitVote(data: Candidate) {
    this.votingService.addVoteToCandidate(data.id, data)
  }

}
