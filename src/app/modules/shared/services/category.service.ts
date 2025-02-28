import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_ENDPOINT } from '../../../config/app';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  protected base_url = BASE_ENDPOINT;
  constructor(private http: HttpClient) { }
  
  /**
   * get all categories
   */
  getCategories() {
    const endPoint = `${this.base_url}/categories`;
    return this.http.get(endPoint)
  }
  /**
   * save categories
   * @param body
   */
  saveCategorie(body: any) {
    const endPoint = `${this.base_url}/categories`;
    return this.http.post(endPoint, body);
  }

  /**
   * update categories
   * @param body 
   * @param id 
   */
  updateCategorie(body: any, id: any) {
    const endPoint = `${this.base_url}/categories/${id}`;
    return this.http.put(endPoint, body, id);
  }

  /**
   * delete categories 
   * @param id 
   */
  deleteCategorie(id: any) {
    const endPoint = `${this.base_url}/categories/${id}`;
    return this.http.delete(endPoint);
  }

 /**
  * get categories by id
  * @param id 
  */
  getCategorieById(id: any) {
    const endPoint = `${this.base_url}/categories/${id}`;
    return this.http.get(endPoint);
  }

}

