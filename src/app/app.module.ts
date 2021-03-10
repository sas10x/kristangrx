import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './root-store/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AHeaderComponent } from './layout/a-header/a-header.component';
import { ZFooterComponent } from './layout/z-footer/z-footer.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from './auth/auth.interceptor';
 
import { ToastrModule } from 'ngx-toastr';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './app.effects';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthStoreModule } from './root-store/auth-store/auth-store.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    AHeaderComponent,
    ZFooterComponent,
    HomeComponent
  ],
  imports: [
    NgxChartsModule,
    NgbModule,
    NzCheckboxModule,
    HttpClientModule,
    AuthStoreModule,
    NzModalModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: 
  [
    { provide: NZ_I18N, useValue: en_US },
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


