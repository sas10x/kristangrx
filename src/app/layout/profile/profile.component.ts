import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models/social/profile';
import { ProfileService } from 'src/app/services/social/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number;
  private sub: any;
  profile: Profile;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.profileService.getProfile(params['id']).subscribe(
        res => {this.profile = res;this.profile.image = "http://localhost:5000/" + this.profile.image;console.log(this.profile)}
      )
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  // getProfile(username: string): Observable<Profile> {
  //   return this.http.get<Profile>(this.baseUrl + username);
  // }
}
