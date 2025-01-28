import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

function colorStyles(color: string, backgroundColor: string) {
  return style({
    color,
    backgroundColor
  });
}

// https://www.youtube.com/watch?v=_mC6KY3IaO0
const romanShades = query(
  ':enter',
  [
    style({ opacity: 0, transform: 'translateY(-15px)' }),
    stagger(
      '0.5s',
      animate(
        '0.5s ease-out',
        style({ opacity: 1, transform: 'translateY(0px)' })
      )
    )
  ],
  { optional: true }
);

export const listArrival = trigger('listArrival', [
  transition(':enter', [romanShades])
]);

export const changeStatus = trigger('changeStatus', [
  state('New', colorStyles('currentcolor', 'transparent')),
  state(
    'In Progress',
    colorStyles(
      'var(--abc-on-category-1-color)',
      'var(--abc-category-1-color)'
    )
  ),
  state(
    'In Review',
    colorStyles(
      'var(--abc-on-category-2-color)',
      'var(--abc-category-2-color)'
    )
  ),
  state(
    'Complete',
    colorStyles(
      'var(--abc-on-category-3-color)',
      'var(--abc-category-3-color)'
    )
  ),
  transition('* <=> *', [animate('1s')])
]);
