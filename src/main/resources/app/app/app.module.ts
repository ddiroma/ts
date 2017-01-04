import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {StepsModule} from './steps/steps.module';
import {LoginComponent} from './login.component';
import {CanvasComponent} from './canvas.component';
import {ChooseComponent} from './choose.component';
import {NameComponent} from './name.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'canvas', component: CanvasComponent},
    {path: 'choose', component: ChooseComponent},
    {path: 'name', component: NameComponent},
    {path: '', redirectTo: '/canvas', pathMatch: 'full'},
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, StepsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, LoginComponent, ChooseComponent, NameComponent, CanvasComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
