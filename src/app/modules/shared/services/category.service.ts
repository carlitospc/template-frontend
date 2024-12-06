import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  
  /**
   * get all categories
   */
  getCategories() {
    const endPoint = `${base_url}/categories`;
    return this.http.get(endPoint)
  }
  /**
   * save categories
   * @param body save categories
   */
  saveCategorie(body: any) {
    const endPoint = `${base_url}/categories`;
    return this.http.post(endPoint, body);
  }

  /**
   * update categories
   * @param body 
   * @param id 
   */
  updateCategorie(body: any, id: any) {
    const endPoint = `${base_url}/categories/${id}`;
    return this.http.put(endPoint, body, id);
  }

  /**
   * delete categories
   * @param body 
   * @param id 
   */
  deleteCategorie(id: any) {
    const endPoint = `${base_url}/categories/${id}`;
    return this.http.delete(endPoint);
  }

 /**
  * get categories by id
  * @param body 
  * @param id 
  */
  getCategorieById(id: any) {
    const endPoint = `${base_url}/categories/${id}`;
    return this.http.get(endPoint);
  }

}

