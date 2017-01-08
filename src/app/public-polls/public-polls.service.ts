import { Injectable } from '@angular/core';
import { AngularFire,
  FirebaseObjectObservable,
  FirebaseListObservable } from 'angularfire2';

import { Logger } from '../shared/logger.service';

@Injectable()
export class PublicPollsService {

  constructor(
    private af: AngularFire,
    private _log: Logger,
  ) {}

  getPolls(): FirebaseListObservable<any> {
    this._log['log']('getPolls(), limit: 20');
    return this.af.database.list('/voteApp/polls', {query: {limitToLast: 20}});
  }

  getResults(id): FirebaseObjectObservable<any> {
    this._log['log']('getResults(id): ' + id);
    return this.af.database.object('/voteApp/results/' + id);
  }

  useService() {
    console.log('Service is working');
  }

}