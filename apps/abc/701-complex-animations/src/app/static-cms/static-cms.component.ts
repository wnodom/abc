import {
  AnimationBuilder,
  AnimationPlayer,
  animate,
  style
} from '@angular/animations';
import {
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

export const shrinkText = [
  style({ 'font-size': '45px' }),
  animate(
    '{{animationSpeed}}ms',
    style({ 'font-size': '{{size}}px' })
  )
];

@Component({
  selector: 'app-static-cms-component',
  templateUrl: './static-cms.component.html',
  styleUrl: './static-cms.component.scss',
  imports: [ReactiveFormsModule]
})
export default class CmsStaticComponent {
  private animationBuilder = inject(AnimationBuilder);

  @ViewChild('sampleText') elementRef: ElementRef | undefined;
  private player: AnimationPlayer | undefined;

  sizeAndSpeed = new FormGroup({
    animationSpeed: new FormControl(500),
    size: new FormControl(12)
  });

  reanimate() {
    if (this.player) {
      this.player.destroy();
    }

    this.player = this.animationBuilder
      .build(shrinkText)
      .create(this.elementRef?.nativeElement, {
        params: this.sizeAndSpeed.value
      });

    this.player.play();
  }
}
