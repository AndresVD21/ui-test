import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() candidate: Candidate;
  @Output() submitVoteEmitter = new EventEmitter<Candidate>();

  mediaUrl: string = '../../../assets/images/';

  thumbsUpPercentaje: number;
  thumbsDownPercentaje: number;

  voteOptionSelection: string = null;

  hasVoted: boolean = false;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.calculatePercentages();
  }

  calculatePercentages() {
    let totalVotes = this.candidate.thumbsUp + this.candidate.thumbsDown;
    let thumbsUp = this.candidate.thumbsUp;
    let thubmsDown = this.candidate.thumbsDown;
    this.thumbsUpPercentaje = Math.ceil(thumbsUp * 100 / totalVotes);
    this.thumbsDownPercentaje = Math.ceil(thubmsDown * 100 / totalVotes);
  }

  moreGoodOpinions() {
    return this.candidate.thumbsUp > this.candidate.thumbsDown;
  }

  moreBadOpinions() {
    return this.candidate.thumbsUp < this.candidate.thumbsDown;
  }

  opinionsAreEven() {
    return this.candidate.thumbsUp === this.candidate.thumbsDown;
  }

  setVoteOption(option: string) {
    this.voteOptionSelection = option;
  }

  isVoteOptionGood() {
    return this.voteOptionSelection === 'good';
  }

  submitVote() {
    if (this.voteOptionSelection) {
      if (this.isVoteOptionGood()) {
        this.candidate.thumbsUp+=1;
      } else {
        this.candidate.thumbsDown+=1;
      }
  
      this.submitVoteEmitter.emit(this.candidate)
  
      this.toastr.success('Thank you for voting!');  
      this.hasVoted = true;
      this.voteOptionSelection = null;
    } else {
      this.toastr.warning('Please select an option');
    }
  }

  voteAgain() {
    this.hasVoted = false;
  }

}
