import { Route } from "@angular/router";
import { RouterUtil } from "@venusta/portal/shared/utils";
import { provideSearchApi } from "@venusta/portal/search/api";
import { providePortalDataAccess } from "@venusta/portal/shared/data-access";
import { provideSearchDataAccess } from "@venusta/portal/search/data-access";
import { provideCustomerApi } from "@venusta/portal/customer/api";
import { provideCustomerDataAccess } from "@venusta/portal/customer/data-access";

export const portalRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@venusta/portal/shell/layout').then(m => m.LayoutComponent),
    providers: [
      // TODO: Create general portal, search and customer provider that provide all the needed dependencies
      providePortalDataAccess(),
      provideSearchDataAccess(),
      provideSearchApi(),
      provideCustomerDataAccess()
    ],
    children: [
      {
        path: `${RouterUtil.Configuration.Customers}`,
        loadChildren: async () => (await import('@venusta/portal/customer/shell')).customerRoutes,
        title: `Klanten ${RouterUtil.Settings.TitlePostfix}`
      },
      {
        path: `${RouterUtil.Configuration.Search}`,
        loadChildren: async () => (await import('@venusta/portal/search/shell')).searchRoutes,
        title: `Zoekresultaten ${RouterUtil.Settings.TitlePostfix}`
      }
    ]
  }
];
