import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { Empleado } from '../../models/empleados';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterLink,RouterLinkActive  } from "@angular/router";
@Component({
  selector: 'app-list-empleado',
  standalone: true,
  imports: [ MatTableModule,
  MatIconModule,
  CommonModule,
  MatButtonModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSnackBarModule,
  RouterLink,RouterLinkActive],
  templateUrl: './list-empleado.component.html',
  styleUrl: './list-empleado.component.css'
})



export class ListEmpleadoComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['nombreCompleto', 
                                'correo', 
                                'estadoCivil', 
                                'fechaIngreso',
                                'sexo',
                                'telefono',
                                'acciones'];
  dataSource = new MatTableDataSource<Empleado>;
  listEmpleado!:Empleado[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private Empleado:EmpleadoService,
              public dialog:MatDialog,
              public snackbar:MatSnackBar){}
  ngOnInit(): void {
    this.cargarEmpleados();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  cargarEmpleados(){
    this.listEmpleado=this.Empleado.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    console.log(this.listEmpleado);
  }
  eliminarEmpleado(index:number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      data: {mensaje: 'Esta seguro que desea eliminar el Empleado?'},
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result ==='aceptar'){
        this.Empleado.eliminarEmpleado(index);
    this.cargarEmpleados();
    this.snackbar.open('El empleado fue eliminado con exito!','',{duration:30000})
      }
      
    
    });
    
  }
}
