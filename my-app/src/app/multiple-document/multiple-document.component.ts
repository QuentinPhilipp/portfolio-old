import { Component, OnInit } from '@angular/core';
import { DocService } from '../services/doc.service';


@Component({
  selector: 'app-multiple-document',
  templateUrl: './multiple-document.component.html',
  styleUrls: ['./multiple-document.component.scss']
})
export class MultipleDocumentComponent implements OnInit {

  documents :any[];
  currentDate = new Date();

  constructor(private docService: DocService) { }

  ngOnInit() {
    this.documents = this.docService.documents;
  }

  checkDate(displayDate) {
    if(this.currentDate < displayDate)
    {
      console.log("True");  //hide
      return true;
    }else{
      console.log("False");
      return false;
    }
  }

}
