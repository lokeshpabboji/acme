import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export default async function Create() {
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    {label : 'Invoices', href : '/dashboard/invoices'},
                    {
                        label : 'Create Invoice',
                        href : '/dashboard/invoices/crete',
                        active : true
                    }
                ]}
            />
            <Form customers={customers}/>
        </main>
    )
}