import { Component, OnInit } from '@angular/core';

interface CommitType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-commit-type',
  templateUrl: './commit-type.component.html',
  styleUrls: ['./commit-type.component.css']
})
export class CommitTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  types: CommitType[] = [
    {value: 'build', viewValue: 'Build'},
    {value: 'ci', viewValue: 'Continuous Integration'},
    {value: 'chore', viewValue: 'Maintain'},
    {value: 'docs', viewValue: 'Documentations'},
    {value: 'feat', viewValue: 'Feature'},
    {value: 'fix', viewValue: 'Fix'},
    {value: 'perf', viewValue: 'Performance'},
    {value: 'refactor', viewValue: 'Refactoring'},
    {value: 'revert', viewValue: 'Reverting change'},
    {value: 'style', viewValue: 'Style'},
    {value: 'test', viewValue: 'Adding Test'}
  ];


}
