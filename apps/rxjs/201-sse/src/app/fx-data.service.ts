import { Injectable, inject } from '@angular/core';
import { share } from 'rxjs';

import { FxQuote } from './fx-quote';
import { SseService } from './sse.service';

const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class FxDataService {
  fxData = inject(SseService)
    .observe<FxQuote>(apiUrl + '/fx/lowfreq')
    .pipe(share());
}
