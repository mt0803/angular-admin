import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-category-list',
  template: require('./list.html'),
  styles: [require('./list.scss')]
})

export class ArticleCategoryList {

  @Input() categories;

  constructor() {
  }

  editCategory(params) {
    // let target = event.target || event.srcElement || event.currentTarget;
    // console.log('编辑分类', params, target, DOM);
  }

  ngOnInit() {
  }
}
