import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  lisEmpleado:Empleado[]=[
    {
    nombreCompleto: 'Lucas Martinez',
    correo: 'lmartinez@gmail.com',
    telefono: 32432434,
    sexo: 'Masculino',
    fechaIngreso: new Date(),
    estadoCivil: 'Soltero'
  },
  {
    nombreCompleto: 'María Fernanda López',
    correo: 'mlopez@gmail.com',
    telefono: 78965412,
    sexo: 'Femenino',
    fechaIngreso: new Date(),
    estadoCivil: 'Casada'
  },
  {
    nombreCompleto: 'Jorge Ramírez',
    correo: 'jramirez@gmail.com',
    telefono: 71234567,
    sexo: 'Masculino',
    fechaIngreso: new Date(),
    estadoCivil: 'Soltero'
  },
  {
    nombreCompleto: 'Carla Mendoza',
    correo: 'cmendoza@gmail.com',
    telefono: 76543210,
    sexo: 'Femenino',
    fechaIngreso: new Date(),
    estadoCivil: 'Divorciada'
  },
  {
    nombreCompleto: 'Andrés Quiroga',
    correo: 'aquiroga@gmail.com',
    telefono: 78912345,
    sexo: 'Masculino',
    fechaIngreso: new Date(),
    estadoCivil: 'Casado'
  },
  {
    nombreCompleto: 'Sofía Gutiérrez',
    correo: 'sgutierrez@gmail.com',
    telefono: 70123456,
    sexo: 'Femenino',
    fechaIngreso: new Date(),
    estadoCivil: 'Soltera'
  },
  {
    nombreCompleto: 'Ricardo Peña',
    correo: 'rpena@gmail.com',
    telefono: 76451234,
    sexo: 'Masculino',
    fechaIngreso: new Date(),
    estadoCivil: 'Viudo'
  }
  ]
  constructor() { }
  getEmpleados(){
    return this.lisEmpleado.slice();
  }
}
