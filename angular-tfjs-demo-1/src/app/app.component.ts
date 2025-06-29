import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tfjs-demo-1';
  openedSubject = new BehaviorSubject<boolean>(false);
  opened$ = this.openedSubject.asObservable();

  selectionSubject = new BehaviorSubject<string>('home');
  selection$ = this.selectionSubject.asObservable();

  stream!: MediaStream;

  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.initializeVideoStream();
  }

  toggleDrawer(): void {
    this.openedSubject.next(!this.openedSubject.value);
  }

  private initializeVideoStream(): void {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      console.log('Stream obtained:', stream); // For debugging
      this.stream = stream;
      this.video.nativeElement.srcObject = stream;
    }).catch((error) => {
      console.error('Error accessing webcam: ', error);
    });
  }
}
