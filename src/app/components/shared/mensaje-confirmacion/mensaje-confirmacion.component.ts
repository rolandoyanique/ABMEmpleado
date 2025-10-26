import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mensaje-confirmacion',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule
          ],
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrl: './mensaje-confirmacion.component.css'
})
export class MensajeConfirmacionComponent {
  mensaje!:string;
  btn='aceptar';
  readonly dialogRef = inject(MatDialogRef<MensajeConfirmacionComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  constructor(){
    this.mensaje=this.data.mensaje;
  }
onNoClick(): void {
    this.dialogRef.close();
  }
}
