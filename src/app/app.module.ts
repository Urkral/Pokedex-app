import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonEquipComponent } from './pokemon-equip/pokemon-equip.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonsListComponent,
    PokemonEquipComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
