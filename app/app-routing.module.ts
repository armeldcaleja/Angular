import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    CategoryListComponent,
    ProductDetailsListComponent,
    ProductDetailsComponent,
    ProductService
} from './product/index';

const routes: Routes = [
    { path: 'all-product', component: CategoryListComponent},
    { path: 'details/category/:id', component: ProductDetailsListComponent},
    { path: 'details/product/:id', component: ProductDetailsComponent},
    { path: '', redirectTo: '/all-product', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}