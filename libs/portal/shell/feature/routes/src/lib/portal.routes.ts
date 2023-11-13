import { Route } from "@angular/router";
import { RouterUtil } from "@venusta/portal/shared/utils";

export const portalRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@venusta/portal/shell/layout').then(m => m.LayoutComponent),
    children: [
      {
        path: `${RouterUtil.Configuration.Customers}`,
        loadChildren: async () => (await import('@venusta/portal/customer/shell')).customerRoutes,
        title: `Klanten ${RouterUtil.Settings.TitlePostfix}`
      }
    ]
  }
];
