import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  @Input() photo;

  getLargeImageUrl(imageId) {
    return `https://picsum.photos/500?image=${imageId}`;
  }
  ngOnInit(): void {
  }

}
