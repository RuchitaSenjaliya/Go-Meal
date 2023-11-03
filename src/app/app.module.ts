import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { PopularDishesComponent } from './popular-dishes/popular-dishes.component';
import { MatCardModule } from '@angular/material/card';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { EndContentComponent } from './end-content/end-content.component';
import { AddressComponent } from './end-content/address/address.component';
import { OrderMenuComponent } from './end-content/order-menu/order-menu.component';
import { BillComponent } from './end-content/bill/bill.component';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CategoryComponent,
    PopularDishesComponent,
    RecentOrdersComponent,
    EndContentComponent,
    AddressComponent,
    OrderMenuComponent,
    BillComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
