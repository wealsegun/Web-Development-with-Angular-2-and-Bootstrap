import ProductComponent from './components/product';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductService} from './services/product-service'
@Component({
    selector: 'app',
    template: `<h1> Basic Dependency Injection Sample</h1>
             <di-product-page></di-product-page>`
})
class AppComponent {}


@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, ProductComponent],
    providers:    [ ProductService ]
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);