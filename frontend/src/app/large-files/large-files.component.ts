import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-large-files',
  templateUrl: './large-files.component.html',
  styleUrls: ['./large-files.component.less']
})
export class LargeFilesComponent implements OnInit {

  files: any[] = [];

  constructor(private communicationsService: CommunicationService) { }

  ngOnInit(): void {
    
  }

}
