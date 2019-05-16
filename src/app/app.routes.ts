import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeToolotsComponent } from './shop/toolots/home-toolots.component';


export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home/toolots', 
    pathMatch: 'full',
  },
  { 
    path : '',
    component : MainComponent,
    children: [ 
      {
        path : 'home',
        loadChildren: './shop/shop.module#ShopModule'
      },
      { 
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
      { 
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

