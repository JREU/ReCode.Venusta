import { Route } from "@angular/router";
import { RouterUtil } from "@venusta/portal/shared/utils";
import { providePortal } from "./portal.provider";

export const portalRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@venusta/portal/shell/layout').then(m => m.LayoutComponent),
    providers: [
      providePortal()
    ],
    children: [
      {
        path: `${RouterUtil.Configuration.Customers}`,
        loadChildren: async () => (await import('@venusta/portal/customer/shell')).customerRoutes,
        title: `Klanten ${RouterUtil.Settings.TitlePostfix}`
      },
      {
        path: `${RouterUtil.Configuration.Appointments}`,
        loadChildren: async () => (await import('@venusta/portal/appointment/shell')).appointmentRoutes,
        title: `Afspraken ${RouterUtil.Settings.TitlePostfix}`
      },
      {
        path: `${RouterUtil.Configuration.Search}`,
        loadChildren: async () => (await import('@venusta/portal/search/shell')).searchRoutes,
        title: `Zoekresultaten ${RouterUtil.Settings.TitlePostfix}`
      }
    ]
  }
];
