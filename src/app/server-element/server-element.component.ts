import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
    console.log('constructor is called');
  }

  // Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  // Called once the component is initialized
  ngOnInit(): void {
    console.log('ngOnInit is called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content: ' + this.contentParagraph.nativeElement.textContent);
  }

  // Called during every change detection run
  ngDoCheck() {
    console.log('ngDoCheck is called');
  }

  // Called after content (ng-content) has been projected into view
  ngAfterContentInit() {
    console.log('ngAfterContentInit is called');
    console.log('Text Content: ' + this.contentParagraph.nativeElement.textContent);
  }

  // Called every time the projected content has been checked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called');
  }

  // Called after the component’s view (and child views) has been initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit is called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  // Called every time the view (and child views) have been checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called');
  }

  // Called once the component is about to be destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy is called');
  }
}
