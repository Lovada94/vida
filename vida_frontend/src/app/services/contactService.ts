import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactRequest {
  name: string;
  surnames: string;
  email: string;
  phone: string;
  interest: 'gym' | 'physio' | 'both';
  comment: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  // TODO: apuntar a la URL real del backend cuando esté disponible.
  private readonly apiUrl = '/api/contact';

  send(request: ContactRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, request);
  }
}
