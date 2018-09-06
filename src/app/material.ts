import { NgModule } from '@angular/core';
import {MatTableModule, MatInputModule, MatPaginatorModule, MatToolbarModule  } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';


// PRIME NG

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [MatTableModule, MatInputModule, MatPaginatorModule,
     MatToolbarModule, MatButtonModule, MatIconModule,
      MatTooltipModule, MatSnackBarModule, MessagesModule,
       MessageModule, ButtonModule, ToastModule],
  exports: [MatTableModule, MatInputModule, MatPaginatorModule,
     MatToolbarModule, MatButtonModule, MatIconModule,
      MatTooltipModule, MatSnackBarModule, MessagesModule,
       MessageModule, ButtonModule, ToastModule],
})
export class MaterialModule { }