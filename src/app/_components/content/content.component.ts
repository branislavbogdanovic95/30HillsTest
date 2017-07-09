import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from "app/_interfaces/i-user";
import { SocialService } from "app/_services";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'test30hills-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  user: IUser;
  friendsOfFriends: [IUser];
  suggestedFriends: [IUser];
  mutual: [{ friend: String, number: number }];
  private subscription: Subscription;
  constructor(private socialService: SocialService) { }

  ngOnInit() {
    let self = this;
    this.subscription = this.socialService.getChoosenUser().subscribe((userId: String) => {
      this.socialService.profileInfo(userId).subscribe((user: IUser) => {
        this.user = user;
      });
      this.socialService.getFriendsOfMyFriends(userId).subscribe((people: { frendsOfMyFriendsWhoAreNotMyFriends: [IUser] }) => {
        this.friendsOfFriends = people.frendsOfMyFriendsWhoAreNotMyFriends;
      })
      this.socialService.getSuggestedFriends(userId).subscribe((suggested: { friendsOfMyFriendsWhoAreNotMyFriends: [IUser], mutual: [{ friend: String, number: number }] }) => {
        this.suggestedFriends = suggested.friendsOfMyFriendsWhoAreNotMyFriends;
        this.mutual = suggested.mutual;
      });
    })
  }

  setUser(userId: String) {
    this.socialService.setChoosenUser(userId);
  }

  getNumberOfMutual(friendId: String): number {
    return this.mutual.find(x => x.friend.toString() == friendId.toString()) != undefined ? this.mutual.find(x => x.friend.toString() == friendId.toString()).number : 0;
  }

  ngOnDestroy() {
    if (this.subscription != undefined) this.subscription.unsubscribe();
  }
}
