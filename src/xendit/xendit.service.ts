import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Xendit, Invoice as InvoiceClient } from 'xendit-node';

@Injectable()
export class XenditService {
    private xenditClient: Xendit;

    constructor(private config: ConfigService) {
        this.xenditClient = new Xendit({
            secretKey: this.config.getOrThrow<string>('XENDIT_SECRET_KEY'),
        });
    }

    async createInvoice(data: {
        externalId: string;
        amount: number;
        payerEmail?: string;
        description?: string;
        successRedirectUrl?: string;
        failureRedirectUrl?: string;
    }) {
        const invoice = await this.xenditClient.Invoice.createInvoice({
            data: {
                externalId: data.externalId,
                amount: data.amount,
                payerEmail: data.payerEmail,
                description: data.description,
                successRedirectUrl: data.successRedirectUrl,
                failureRedirectUrl: data.failureRedirectUrl,
                currency: 'IDR',
            },
        });

        return invoice;
    }
}
