import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  imports: [MatTableModule, MatInputModule, MatPaginatorModule],
  exports: [MatTableModule, MatInputModule, MatPaginatorModule],
})
export class MaterialModule { }