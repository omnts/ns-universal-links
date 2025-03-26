import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'
import { Page } from '@nativescript/core'

@Component({
  selector: 'ns-counter',
  templateUrl: './counter.component.html',
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  styleUrls: ['./counter.component.css'],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CounterComponent {
  page = inject(Page)
  counter: number = 0

  constructor() {
    // Setup large titles on iOS
    this.page.on('loaded', (args) => {
      if (__IOS__) {
        const navigationController: UINavigationController = this.page.frame.ios.controller
        navigationController.navigationBar.prefersLargeTitles = true
      }
    })
  }

  incrementCounter() {
    this.counter++
  }
}
