import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'web-monetization';
  monetized = false;

  ngOnInit() {
    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', () => {
        this.monetized = true;
      })
    }
  }

  pay() {
    const  event = new Event('monetizationstart');
    document.monetization.dispatchEvent(event)
  }
}
