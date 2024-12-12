import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent implements OnInit {
  //inyeccion para el servicio
  private categoryService = inject(CategoryService);
  //inyeccion para el dialog
  public dialogRef = inject(MatDialogRef);
  //recuperamos la data que nos envia el padre
  public data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
  }

  onNotClick() {
    this.dialogRef.close(3);
  }

  delete() {
    if(this.data != null) {
      this.categoryService.deleteCategorie(this.data.id)
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
    } else {
      this.dialogRef.close(2);
    }
  }
}
