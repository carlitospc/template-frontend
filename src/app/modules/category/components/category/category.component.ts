import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  private categoryService = inject(CategoryService);
  //public dialog = inject(MatDialog);
  //private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.getCategories();
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<CategoryElement>();

  getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data: any) => {
        console.log(data);
        this.processCategoriesResponse(data);
      },
      error: (error: any) => {
        console.log("error: ", error);
      },
      complete: () => {
      }
    });
  }

  processCategoriesResponse(resp: any) {
    const dataCategory: CategoryElement[] = [];

    if (resp.metadata[0].code == "00") {
      let listCategory = resp.categoryResponse.category;
      
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });

      // se carga la data que es de tipo CategoryElement al datasource que es de tipo MatTableDataSource
      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
    }
  }

  openCategoryDialog() {
    /*const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1) {
        this.openSnackBar("Categoria agregada", "Exitosa");
        this.getCategories();
      } else if(result == 2){
        this.openSnackBar("Se producjo un error al guardar categoria", "Error");
      }
    });*/
  }

  edit(id: number, name: string, description: string){
  /*  const dialogRef = this.dialog.open(NewCategoryComponent, {
      data: {id: id, name: name, description: description},
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1) {
        this.openSnackBar("Categoria actualizada", "Exitosa");
        this.getCategories();
      } else if(result == 2){
        this.openSnackBar("Se producjo un error al actualizar categoria", "Error");
      }
    });*/
  }

  delete(id: any) {
    /*const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {id: id},
    });
    
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result == 1) {
        this.openSnackBar("Categoria eliminada", "Exitosa");
        this.getCategories();
      } else if(result == 2){
        this.openSnackBar("Se producjo un error al eliminarar categoria", "Error");
      }
    });*/
  }

  buscar(termino: string) {
  /*  if(termino.length === 0) {
      return this.getCategories();
    }

    this.categoryService.getCategorieById(termino)
      .subscribe({
        next: (resp: any) => {
          this.processCategoriesResponse(resp);
        },
        error: (error: any) => {
        },
        complete: () => {
        }
      })*/
  }

  /*openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }*/
}

/* interfaz para el dataSouce */
export interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
