import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardLoaderComponent } from './components/loaders/card-loader/card-loader.component';

import * as fromPipes from './pipes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...fromComponents.components, CardUserComponent, CarouselComponent, CardLoaderComponent, ...fromPipes.pipes],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
