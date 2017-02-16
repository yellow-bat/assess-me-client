import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: 'tag-input.component.html',
  styleUrls: ['tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  @Output() set: any = new EventEmitter<string[]>();
  tags: any = {
    string: '',
    result: []
  };

  constructor() {
  }

  deleteTag(tag: string): void {
    const index: number = this.tags.result.indexOf(tag);
    this.tags.result.splice(index, 1);
  }

  tagsUpdated(event: any): void {
    setTimeout(() => {
      const submit = this.tags.string.indexOf(',') !== -1 ||
                     event.key === 'Enter' ||
                     event.type === 'blur';


      if (!submit) {
        return;
      }

      let newTag = this.tags.string.split(',')[0];
      if (newTag) {
        this.tags.string = '';
        if (this.tags.result.indexOf(newTag) === -1) {
          this.tags.result = this.tags.result.concat(newTag);
        }
      }
      this.set.emit(this.tags.result);
    }, 0);
  }

  ngOnInit() {
  }

}
