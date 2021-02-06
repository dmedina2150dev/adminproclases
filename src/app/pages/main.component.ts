import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction();

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor(private _settingsService: SettingsService ) { }

  ngOnInit(): void {
    customInitFunction();
  }

}
