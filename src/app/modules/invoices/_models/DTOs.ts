import { SimplifiedPartner } from "src/app/models/partner";
import { SimplifiedProject } from "src/app/models/project";
import { ContractDTO } from "../../contracts/_models/DTOs";

export interface InvoiceDTO
{
    id: Number;
    uuid: String;
    number: String;
    invoice_type: String;
    status: String;
    issuance_date: Date;
    due_date: Date;
    partner: SimplifiedPartner;
    project: SimplifiedProject;
    contract: ContractDTO;
    created_at: Date;
    net_value: Number;
    // paid_value: Number;
    //vat
}