import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() candidate: Candidate;

  mediaUrl: string = '../../../assets/images/';

  thumbsUpPercentaje: number;
  thumbsDownPercentaje: number;

  voteOptionSelection: string = '';

  hasVoted: boolean = false;

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.calculatePercentages();
  }

  calculatePercentages() {
    let totalVotes = this.candidate.thubmsUp + this.candidate.thumbsDown;
    let thubmsUp = this.candidate.thubmsUp;
    let thubmsDown = this.candidate.thumbsDown;
    this.thumbsUpPercentaje = Math.ceil(thubmsUp * 100 / totalVotes);
    this.thumbsDownPercentaje = Math.ceil(thubmsDown * 100 / totalVotes);
  }

  moreGoodOpinions() {
    return this.candidate.thubmsUp > this.candidate.thumbsDown;
  }

  moreBadOpinions() {
    return this.candidate.thubmsUp < this.candidate.thumbsDown;
  }

  opinionsAreEven() {
    return this.candidate.thubmsUp === this.candidate.thumbsDown;
  }

  setVoteOption(option: string) {
    this.voteOptionSelection = option;
  }

  isVoteOptionGood() {
    return this.voteOptionSelection === 'good';
  }

  submitVote() {

    if (this.isVoteOptionGood()) {
      this.candidate.thubmsUp+=1;
    } else {
      this.candidate.thumbsDown+=1;
    }

    this.toastr.success('Thank you for voting!');

    this.calculatePercentages();

    this.hasVoted = true;
    this.voteOptionSelection = '';
  }

  voteAgain() {
    this.hasVoted = false;
  }

}
