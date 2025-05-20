import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Video } from '../dashboard.types';

// This component serves as a small example of
// a view component. In this case, the dashboard
// is acting as the corresponding smart component
@Component({
  selector: 'vst-top-list',
  templateUrl: './top-list.component.html',
  styleUrl: './top-list.component.scss'
})
export class TopListComponent {
  @Input({ required: true }) topList!: Video[];
  @Input({ required: true }) selectedVideo: Video | undefined;
  @Output() videoChanged = new EventEmitter<Video>();

  selectVideo(video: Video) {
    this.videoChanged.emit(video);
  }
}
