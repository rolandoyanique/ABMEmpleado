import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { Empleado } from '../../models/empleados';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-list-empleado',
  standalone: true,
  imports: [MatTableModule,MatIconModule,CommonModule,MatSortModule,MatFormFieldModule,MatInputModule,MatPaginator,MatPaginatorModule],
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
  constructor(private Empleado:EmpleadoService){}
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
    console.log(this.listEmpleado);
  }
  eliminarEmpleado(index:number){
    this.Empleado.eliminarEmpleado(index);
    this.cargarEmpleados();
  }
}
