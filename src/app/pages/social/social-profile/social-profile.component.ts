import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss']
})
export class SocialProfileComponent implements OnInit {

  getImageUrl(imageId) {
    return `https://picsum.photos/100?image=${imageId}`;
  }

  ngOnInit() {
    console.log('Hi');
  }
}
