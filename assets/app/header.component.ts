import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs nav-justified">
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Create Message</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Log In</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}