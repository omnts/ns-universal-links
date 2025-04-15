import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { PageRouterOutlet } from '@nativescript/angular';
import { isAndroid, isIOS } from "@nativescript/core";

declare var fr: any;
declare var DatadomeHelper: any;

@Component({
    selector: 'ns-app',
    templateUrl: './app.component.html',
    imports: [PageRouterOutlet],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent implements OnInit {
    private  rootUrl: string = "https://api.domain.com";

    ngOnInit(): void {
        if (isAndroid) {
            var datadomeWrapperJava = new fr.helfrich.java.DatadomeWrapperClass(this.rootUrl);
            console.log(`#18490 Message from Java source code : ${datadomeWrapperJava.rootUrl}`);
            console.log(`#18490 Message from Java source cookie : ${datadomeWrapperJava.cookieName}`);

            const datadomeWrapperKotlin = new fr.helfrich.kt.DatadomeHelper(this.rootUrl)
            datadomeWrapperKotlin.showRootURL();
            console.log(`#18490 Message from Kotlin source code rootUrl : ${datadomeWrapperKotlin.rootUrl}`);
            console.log(`#18490 Message from Kotlin source code cookie : ${datadomeWrapperKotlin.cookieName}`);
        } else if (isIOS) {
            var datadomeWrapperSwift = new DatadomeHelper(this.rootUrl)
            datadomeWrapperSwift.showRootURL()
            console.log(`#18490 datadomeWrapperSwift : ${datadomeWrapperSwift}`);
            console.log(`#18490 Message from Swift source code rootUrl : ${datadomeWrapperSwift.rootUrl}`);
            console.log(`#18490 Message from Swift source code cookie : ${datadomeWrapperSwift.cookieName}`);
        }
    }
}
