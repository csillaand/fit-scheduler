import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedView } from 'src/app/models/paginated_view';
import { InvoiceDTO } from '../_models/DTOs';
import { InvoiceStore } from '../_services/invoice-store.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.sass']
})
export class InvoicesListComponent  {

  constructor(private invoicesStore: InvoiceStore) { }

  public get invoices$(): Observable<PaginatedView<InvoiceDTO>>
  {
    return this.invoicesStore.list;
  }


}
