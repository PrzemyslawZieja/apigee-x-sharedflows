if(context.getVariable("emporixScopes.scope")) {
    var scopes = context.getVariable("emporixScopes.scope");
    
    if(scopes.includes("hybris") || scopes.includes("saasag")) {
        var usedDeprecatedScopes = "";
        var deprecations = {
            'saasag.availability_view' : 'availability.availability_view',
            'saasag.availability_manage' : 'availability.availability_manage',
            'saasag.brand_delete' : 'brand.brand_delete',
            'saasag.brand_manage' : 'brand.brand_manage',
            'hybris.cart_manage' : 'cart.cart_manage',
            'hybris.category_update' : 'category.category_update',
            'hybris.category_publish' : 'category.category_unpublish',
            'hybris.category_unpublish' : 'category.category_unpublish',
            'hybris.category_read_unpublished' : 'category.category_read_unpublished',
            'saasag.category_read_unpublished' : '',
            'hybris.category_delete_all' : 'category.category_delete_all',
            'hybris.category_delete' : 'category.category_delete',
            'hybris.category_create' : 'category.category_create',
            'hybris.checkout_delete_all' : 'checkout.checkout_delete_all',
            'hybris.checkout_manage' : 'checkout.checkout_manage',
            'hybris.account_manage' : '',
            'hybris.account_view' : '',
            'hybris.api_view' : '',
            'hybris.marketplace_submit' : '',
            'hybris.org_manage' : '',
            'hybris.org_members' : '',
            'hybris.org_payment' : '',
            'hybris.org_project_create' : '',
            'hybris.org_project_manage' : '',
            'hybris.org_view' : '',
            'sap.bill_view' : '',
            'sap.invoicerequest_manage' : '',
            'sap.subscription_cancel' : '',
            'sap.subscription_manage' : '',
            'sap.subscription_provider_terminate' : '',
            'sap.subscription_provider_view' : '',
            'hybris.package_view' : '',
            'saasag.content_component_delete' : 'content.component_delete',
            'saasag.content_component_delete_all' : 'content.component_delete_all',
            'saasag.content_component_manage' : 'content.component_manage',
            'saasag.content_type_delete' : 'content.type_delete',
            'saasag.content_type_delete_all' : 'content.type_delete_all',
            'saasag.content_type_manage' : 'content.type_manage',
            'saasag.content_type_view' : 'content.type_view',
            'saasag.content_type_view_all' : 'content.type_view_all',
            'hybris.configuration_view' : 'configuration.configuration_view',
            'saasag.configuration_view' : '',
            'hybris.configuration_admin' : '',
            'hybris.configuration_manage' : 'configuration.configuration_manage',
            'saasag.country_delete' : 'country.country_delete',
            'saasag.country_manage' : 'country.country_manage',
            'country.country_manage' : '',
            'hybris.coupon_manage' : 'coupon.coupon_manage',
            'hybris.coupon_redeem' : 'coupon.coupon_redeem',
            'hybris.coupon_redeem_on_behalf' : 'coupon.coupon_redeem_on_behalf',
            'hybris.profile_consent_view' : 'customer.consent_view',
            'hybris.profile_consent_manage' : 'customer.consent_manage',
            'hybris.customer_read' : 'customer.customer_read',
            'saasag.customer_read' : 'customer.customer_read',
            'emporix.customer_read' : 'customer.customer_read',
            'hybris.customer_update' : 'customer.customer_update',
            'hybris.customer_manage' : 'customer.customer_manage',
            'hybris.customer_delete' : 'customer.customer_delete',
            'hybris.customer_create' : 'customer.customer_create',
            'hybris.customer_view_profile' : 'customer.customerprofile_view',
            'hybris.customer_edit_profile' : 'customer.customerprofile_edit',
            'saasag.delivery_area_delete' : 'delivery.area_delete',
            'saasag.delivery_time_delete' : 'delivery.time_delete',
            'saasag.delivery_area_manage' : 'delivery.area_manage',
            'saasag.delivery_time_manage' : 'delivery.time_manage',
            'saasag.email_invoice_send' : 'email.invoice_send',
            'saasag.email_coupons_send' : 'email.coupons_send',
            'saasag.email_newsletterdoi_send' : 'email.newsletterdoi_send',
            'saasag.email_shippingconfirmation_send' : 'email.shippingconfirmation_send',
            'saasag.email_picklist_send' : 'email.picklist_send',
            'hybris.email_send' : 'email.email_send',
            'hybris.email_manage' : 'email.email_manage',
            'saasag.html2pdf_delete' : 'html2pdf.html2pdf_delete',
            'saasag.html2pdf_link' : 'html2pdf.html2pdf_link',
            'saasag.html2pdf_read' : 'html2pdf.html2pdf_read',
            'saasag.html2pdf_search' : 'html2pdf.html2pdf_search',
            'saasag.html2pdf_stream' : 'html2pdf.html2pdf_stream',
            'saasag.html2pdf_update_metadata' : 'html2pdf.metadata_update',
            'hybris.search_manage' : '',
            'hybris.search_view' : '',
            'hybris.search-algolia_index' : 'indexing.algolia_index',
            'hybris.search-algolia_manage' : 'indexing.algolia_manage',
            'hybris.search-algolia_read' : 'indexing.algolia_read',
            'saasag.import_admin' : '',
            'import.import_admin' : '',
            'saasag.import_manage' : '',
            'saasag.import_view' : '',
            'saasag.invoice_manage' : 'invoice.invoice_manage',
            'saasag.invoice_view' : 'invoice.invoice_view',
            'saasag.newsletter_export_all' : 'newsletter.newsletter_export',
            'saasag.newsletter_read_all' : 'newsletter.newsletter_read',
            'saasag.label_manage' : 'label.label_manage',
            'saasag.label_delete' : 'label.label_delete',
            'hybris.order_read' : 'order.order_read',
            'hybris.order_update' : 'order.order_update',
            'hybris.order_post' : 'order.order_post',
            'hybris.order_delete' : 'order.order_delete',
            'hybris.order_create' : 'order.order_create',
            'hybris.order_update_as_customer' : 'order.order_updateascustomer',
            'hybris.order_view_history' : 'order.history_view',
            'hybris.order_read_as_customer' : '',
            'order.order_readascustomer' : '',
            'hybris.price_delete_all' : 'price.price_delete_all',
            'hybris.price_manage' : 'price.price_manage',
            'hybris.price_owner' : 'price.price_own',
            'hybris.prod_price_calculate' : '',
            'saasag.prod_price_calculate' : '',
            'price.prod_price_calculate' : '',
            'saasag.shippingnote_create' : 'pdfmashup.shippingnote_create',
            'saasag.packlist_create' : 'pdfmashup.packlist_create',
            'saasag.picklist_create' : 'pdfmashup.picklist_create',
            'saasag.scheduler_manage' : 'pdfmashup.scheduler_manage',
            'saasag.scheduler_read' : 'pdfmashup.scheduler_read',
            'hybris.media_manage' : '',
            'saasag.invoice_create' : 'pdfmashup.invoice_create',
            'saasag.pickpack_manage' : 'pickpack.pickpack_manage',
            'saasag.pickpack_view' : 'pickpack.pickpack_view',
            'saasag.prod_cat_delete' : 'pcm.prod_cat_delete',
            'saasag.prod_cat_assignment_delete' : '',
            'pcm.assignment_delete' : '',
            'saasag.prod_cat_assignment_manage' : 'pcm.assignment_manage',
            'saasag.prod_cat_read_unpublished' : 'pcm.unpublished_read',
            'saasag.prod_cat_image_delete' : 'pcm.image_delete',
            'saasag.prod_cat_image_manage' : 'pcm.image_manage',
            'saasag.prod_delete' : 'pcm.prod_delete',
            'saasag.prod_read_unpublished' : 'pcm.prod_read',
            'saasag.prod_manage' : 'pcm.prod_manage',
            'saasag.prod_cat_manage' : 'pcm.prod_cat_manage',
            'hybris.product_update' : '',
            'hybris.product_create' : '',
            'hybris.product_delete' : '',
            'hybris.product_delete_all' : '',
            'hybris.product_publish' : '',
            'hybris.product_unpublish' : '',
            'hybris.product_read_unpublished' : '',
            'saasag.popularityimp_manage' : 'productimport.popularityimp_manage',
            'saasag.pricelistimp_manage' : 'productimport.pricelistimp_manage',
            'saasag.rewardpoints_manage' : 'rewardspoints.rewardpoints_manage',
            'saasag.rewardpoints_view' : 'rewardspoints.rewardpoints_view',
            'hybris.shipping_manage' : 'shipping.shipping_manage',
            'saasag.shipping_manage' : '',
            'hybris.site_manage' : 'site.site_manage',
            'hybris.site_read' : 'site.site_read',
            'sepa-export_job_manage' : 'sepaexport.job_manage',
            'sepa-export_job_view' : 'sepaexport.job_view',
            'sepa-export_media_view' : 'sepaexport.media_view',
            'sequentialid.sequentialid_manage' : '',
            'saasag.sequentialid_manage' : '',
            'hybris.schema_manage' : 'sequentialid.schema_manage',
            'sequentialid.schema_admin' : '',
            'hybris.schema_admin' : '',
            'saasag.schema_view' : 'sequentialid.schema_view',
            'hybris.schema_view' : 'sequentialid.schema_view',
            'saasag.shoppinglist_delete' : 'shoppinglist.shoppinglist_delete',
            'saasag.shoppinglist_read' : 'shoppinglist.shoppinglist_read',
            'saasag.supplier_delete' : 'supplier.supplier_delete',
            'saasag.supplier_manage' : 'supplier.supplier_manage',
            'saasag.vatsplitting_calculate' : 'vatsplitting.vatsplitting_calculate',
            'hybris.tax_manage' : 'tax.tax_manage'
        };
    
        for(var deprecation in deprecations) {
            if(scopes.includes(deprecation)) {
                usedDeprecatedScopes = usedDeprecatedScopes + " " + deprecation;
                scopes = scopes.replace(deprecation, deprecations[deprecation]);
            }
        }

        context.setVariable("emporixScopes.scope", scopes);
        context.setVariable("usedDeprecatedScopes", usedDeprecatedScopes);
        context.setVariable('request.header.X-Deprecated-Scopes', usedDeprecatedScopes);
        
        print("Used deprecated scopes:", usedDeprecatedScopes);
    }

}