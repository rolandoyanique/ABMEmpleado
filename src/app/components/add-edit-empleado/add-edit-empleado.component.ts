import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,provideNativeDateAdapter} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-edit-empleado',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [RouterModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatFormFieldModule, 
            MatInputModule, 
            MatSelectModule,
          MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-edit-empleado.component.html',
  styleUrl: './add-edit-empleado.component.css'
})
export class AddEditEmpleadoComponent {
  estadosCiviles:any[]=['Soltero','Casado','Divorsiado'];
}
