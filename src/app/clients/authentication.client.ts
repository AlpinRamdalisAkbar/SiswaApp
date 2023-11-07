import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) { }

    //#region login
    public login(username: string, password: string): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/login',
            {
                username: username,
                password: password,
            },
            { responseType: 'text' }
        );
    }
    //#endregion login

    //#region register
    public register(
        username: string,
        email: string,
        password: string
    ): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/user/register',
            {
                username: username,
                email: email,
                password: password,
            },
            { responseType: 'text' }
        );
    }
    //#endregion register
}