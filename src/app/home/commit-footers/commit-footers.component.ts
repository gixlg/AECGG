import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-commit-footers',
  templateUrl: './commit-footers.component.html',
  styleUrls: ['./commit-footers.component.css']
})
export class CommitFootersComponent implements OnInit {
  controlImplements: FormControl;
  optionsImplements: string[] = [];
  controlCoAuthoredBy: FormControl;
  optionsCoAuthoredBy: string[] = [];

  constructor() {
    this.controlImplements = new FormControl("http://gbs.atlassian.net/browse/")
    this.controlCoAuthoredBy = new FormControl()
  }

  ngOnInit(): void {
  }

}
