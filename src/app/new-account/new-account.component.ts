import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingServices } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [LoggingServices]
})
export class NewAccountComponent implements OnInit {
  
  constructor(private loggingServices: LoggingServices, private accountsService: AccountsService) { 
    accountsService.statusUpdated.subscribe(
      (status: string)=> alert('New status: ' + status)
    );
  }

  ngOnInit() {
  }
  onCreateAccount(accountName: string, accountStatus: string){
   this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingServices.logStatusChange(accountStatus);
  }
}
