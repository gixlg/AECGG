import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-commit-message',
  templateUrl: './commit-message.component.html',
  styleUrls: ['./commit-message.component.css']
})
export class CommitMessageComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

}
