import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageKey = 'myStock';
  constructor() { }


  // Store data in local storage
  setItem(data: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Retrieve data from local storage
  getItem(): any {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  // Clear the local storage
  clear(): void {
    localStorage.removeItem(this.storageKey);
  }

}
