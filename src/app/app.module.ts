/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from "@nebular/theme";
import {
  NbAuthModule,
  NbPasswordAuthStrategy,
  NbAuthJWTToken,
} from "@nebular/auth";
import { UserService } from "./services/user.services";
import { TransactionsService } from "./services/transactions.service";
import { RolesService } from "./services/roles.services";
import { AuthService } from "./services/auth.services";
import { DataService } from './services/data.share.services';
import { JwtInterceptor } from './services/jwtInterceptor.services';
const login = {
  alwaysFail: false,
  strategy: 'username',
  redirect: {
    success: "/pages",
    failure: null,
  },
  defaultErrors: ["Login/Email combination is not correct, please try again."],
  defaultMessages: ["You will successfully be logged in."],
  endpoint: "/azam/users/login",
  method: "post",
};
const logout = {
  endpoint: "/azam/users/login",
  method: "post",
  redirect: {
    success: "/auth/login",
    failure: null,
  },
};
const register = {
  endpoint: "/azam/users/register",
  defaultErrors: ["Login/Email combination is not correct, please try again."],
  defaultMessages: ["You will successfully be logged in."],
  method: "post",
  redirect: {
    success: "/auth/login",
    failure: null,
  },
};
const requestPass = {
  endpoint: "/azam/users/request-password",
  method: "post",
  redirect: {
    success: "/auth/login",
    failure: null,
  },
};
const resetPass = {
  endpoint: "/azam/users/reset-password",
  method: "post",
  redirect: {
    success: "/auth/login",
    failure: null,
  },
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          baseEndpoint: "https://172.16.100.5:4300",
          token: {
            class: NbAuthJWTToken,
            key: "data.Authorization",
          },
          login,
          logout,
          resetPass,
          requestPass,
          register,
        }),
      ],
    }),
  ],
  bootstrap: [AppComponent],
  providers: [UserService, TransactionsService, RolesService, AuthService, DataService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
})
export class AppModule { }
