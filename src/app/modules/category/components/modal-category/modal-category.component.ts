import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../shared/services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrl: './modal-category.component.css'
})
export class ModalCategoryComponent implements OnInit {
  stateForm: string = "Agregar";

  //inyeccion para el formulario
  public categoryForm!: FormGroup;
  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);
  
  //inyeccion para el dialog
  private dialogRef = inject(MatDialogRef);
  //recuperamos la data que nos envia el padre
  public data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    //si llega data desde el componente padre
    if(this.data != null) {
      //actualiza la data del formulario
      this.updateForm(this.data);
      //solo un estado para el texto del boton
      this.stateForm = "Actualizar";
    }
  }

  onSave() {
    //construimos un objeto con el formulario
    let dataForm = {
      name: this.categoryForm.get('name')?.value,
      description: this.categoryForm.get('description')?.value
    }

    //validacion de la data que llego del componente padre
    if(this.data != null) {
      //actualizar
      this.categoryService.updateCategorie(dataForm, this.data.id)
        .subscribe({
          next: (result: any) => {
            this.dialogRef.close(1);
          },
          error: (error: any) => {
            this.dialogRef.close(2);
          },
          complete: () => {
          }
        });
    } else {
      //guardar
      this.categoryService.saveCategorie(dataForm)
      .subscribe({
        next: (result: any) => {
          this.dialogRef.close(1);
        },
        error: (error: any) => {
          this.dialogRef.close(2);
        },
        complete: () => {
        }
      })
    }
  }

  //click en boton cancelar
  onCancel() {
    this.dialogRef.close(3);
  }

  //se actualiza la data que llego del componente padre al formulario
  updateForm(data: any){
    this.categoryForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required]
    });
  }
}
