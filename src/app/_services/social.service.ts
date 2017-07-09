import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/map";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SocialService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private selectedUserId: Subject<String> = new Subject<String>();

  constructor(private http: Http) { }

  getRelationshipGraph() {
    return this.http.get('/api/social/make_graph').map(res => res.json());
  }

  profileInfo(userId: String) {
    return this.http.post(`/api/social/profile/${userId}`, this.headers).map(res => res.json());
  }

  setChoosenUser(userId: String) {
    this.selectedUserId.next(userId);
  }

  getChoosenUser() {
    return this.selectedUserId.asObservable();
  }

  getSuggestedFriends(userId: String) {
    return this.http.post(`/api/social/suggested/${userId}`, this.headers).map(res => res.json());
  }

  getFriendsOfMyFriends(userId: String) {
    return this.http.get(`/api/social/friends_of_my_friends/${userId}`).map(res => res.json());
  }

  getNumberOfMutualFriends(userId: String, friendId: String) {
    return this.http.post(`/api/social/mutual/${userId}/${friendId}`, this.headers).map(res => res.json());
  }

}
