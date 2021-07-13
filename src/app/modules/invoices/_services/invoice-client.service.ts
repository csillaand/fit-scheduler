import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { emptyPaginatedView, PaginatedView } from 'src/app/models/paginated_view';
import { environment } from 'src/environments/environment';
import { InvoiceDTO } from '../_models/DTOs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceClient {

  private INVOICES_URL = environment.babelUrl + 'budget/invoices';

  constructor(private httpClient: HttpClient) { }

  public list(query: Map<string, any>|null): Observable<PaginatedView<InvoiceDTO>> 
  {
    let url = this.INVOICES_URL;
    if (query && query.size > 0) {
      let queryTerms: string[] = [];
      query.forEach((value: any, queryParamName: string) => queryTerms.push(queryParamName + '=' + value));
      url += '?' + queryTerms.join('&');
    }
    return this.httpClient.get<PaginatedView<InvoiceDTO>>(url).pipe(catchError(_ => of(emptyPaginatedView)));

  }
}
