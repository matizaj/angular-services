import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LoggingServices }from '../logging.service';
import { AccountsService }from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingServices]
})
export class AccountComponent implements OnInit {
  @Input() id: number;
  @Input() account: {name: string, status: string};
 
  constructor(private loggingServices: LoggingServices, private accountsService: AccountsService) { }

  ngOnInit() {
  }
  onSetTo(status: string){
    this.accountsService.updateStatus(this.id, status);
    //this.loggingServices.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
