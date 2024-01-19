import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  template: '<p>ID: {{ dynamicId }}</p>',
})
export class DynamicComponent implements OnInit {
  dynamicId: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dynamicId = params['id'];
    });
  }
}