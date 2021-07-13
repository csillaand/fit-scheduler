import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { emptyPaginatedView, PaginatedView } from 'src/app/models/paginated_view';
import { InvoiceDTO } from '../_models/DTOs';
import { InvoiceClient } from './invoice-client.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceStore 
{
  private invoicesListSubject = new Subject<PaginatedView<InvoiceDTO>>();
  private list$ = this.invoicesListSubject.asObservable();
  private subscriptions: Subscription[] = [];

  constructor(private invoiceClient: InvoiceClient) 
  { 
    this.load = this.load.bind(this);
    this.invoicesListSubject.next(emptyPaginatedView);
    this.load();
  }

  get list(): Observable<PaginatedView<InvoiceDTO>>
  {
    return this.list$;
  }

  public load(query: Map<string, any>|null = null): void
    {
        this.subscriptions.push(this.invoiceClient.list(query)
            .subscribe(view => {
                this.invoicesListSubject.next(view);
            }));
    }
}
