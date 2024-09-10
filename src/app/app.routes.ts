import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent }
];
