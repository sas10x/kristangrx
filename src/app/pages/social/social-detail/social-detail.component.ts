import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-detail',
  templateUrl: './social-detail.component.html',
  styleUrls: ['./social-detail.component.scss']
})
export class SocialDetailComponent {

  @Input() photo;

  getLargeImageUrl(imageId) {
    return `https://picsum.photos/500?image=${imageId}`;
  }

}
