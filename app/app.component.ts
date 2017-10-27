import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <my-nav></my-nav>
            <router-outlet></router-outlet>
        </div>
        `
})

export class AppComponent {

}