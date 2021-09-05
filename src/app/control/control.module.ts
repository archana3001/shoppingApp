import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddProductinListComponent } from './add-productin-list/add-productin-list.component';

@NgModule({
  declarations: [
    ControlComponent,
    LoginComponent,
    RegisterComponent,
    AddProductinListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatCommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AddProductinListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ControlModule { }
