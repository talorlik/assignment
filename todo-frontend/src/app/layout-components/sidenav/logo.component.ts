import { Component, OnInit } from '@angular/core';

const template = ``;

@Component({
  selector: 'logo',
  template
})
export class LogoComponent implements OnInit {

  large = true;
  viewBoxLarge = {
    x0: 0,
    y0: 0,
    x1: 468.1,
    y1: 206.9
  };
  viewBoxSmall = {
    x0: 330,
    y0: 0,
    x1: 468.1,
    y1: 206.9
  };
  viewBox = Object.assign({}, this.viewBoxLarge);
  viewBoxString = this.stringifyViewbox(this.viewBox);
  increment = 20;
  animationFrame;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.large) {
      this.shrink();
    } else {
      this.grow();
    }
  }

  shrink() {
    this.large = false;
    clearTimeout(this.animationFrame);
    this.animate(this.viewBoxSmall.x0);
  }

  grow() {
    this.large = true;
    clearTimeout(this.animationFrame);
    this.animate(this.viewBoxLarge.x0);
  }

  stringifyViewbox(vb) {
    return `${vb.x0} ${vb.y0} ${vb.x1} ${vb.y1}`;
  }

  animate(target) {
    if (this.viewBox.x0 === target) {
      return;
    } else if (Math.abs(this.viewBox.x0 - target) <= this.increment) {
      this.viewBox.x0 = target;
      this.updateViewBox();
    } else {
      const increment = this.viewBox.x0 > target ? -this.increment : this.increment;
      this.viewBox.x0 += increment;
      this.updateViewBox();
      this.animationFrame = setTimeout(() => {
        this.animate(target);
      }, 16.7);
    }
  }

  updateViewBox() {
    this.viewBoxString = this.stringifyViewbox(this.viewBox);
  }

}
