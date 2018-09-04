import { NgModule } from '@angular/core';
import {MatTableModule, MatInputModule, MatPaginatorModule, MatToolbarModule  } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  imports: [MatTableModule, MatInputModule, MatPaginatorModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [MatTableModule, MatInputModule, MatPaginatorModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
})
export class MaterialModule { }