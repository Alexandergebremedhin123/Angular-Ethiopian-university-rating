import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Name } from '../models/Name';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private static serverUrl:string="http://localhost:9000";
  private static frontUrl:string="http://localhost:4200";
  public statusID1:boolean=false;

  constructor(private httpClient:HttpClient) { }
  public getAllContacts():Observable<Name[]>{
    let dataURL: string= `${RatingService.serverUrl}/names`;
    return this.httpClient.get<Name[]>(dataURL).pipe(catchError(this.handleError));
  }
  
  
  public getContact(contactId:string):Observable<Name>{
    let dataURL:string=`${RatingService.serverUrl}/names/${contactId}`;
    return this.httpClient.get<Name>(dataURL).pipe(catchError(this.handleError));
  }
  
  public createContact(name: Name):Observable<Name>{
    let dataURL: string= `${RatingService.serverUrl}/names`;
    return this.httpClient.post<Name>(dataURL,name).pipe(catchError(this.handleError));
  
  }
  public updateContact(name: Name, contactId:string):Observable<Name>{
    let dataURL: string= `${RatingService.serverUrl}/names/${contactId}`;
    return this.httpClient.put<Name>(dataURL,name).pipe(catchError(this.handleError));
  
  }
  public deleteContact( contactId:string):Observable<{}>{
    let dataURL: string= `${RatingService.serverUrl}/names/${contactId}`;
    return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
  
  }



 public handleError(error:HttpErrorResponse){
let errorMessage:string='';
if(error.error instanceof ErrorEvent){
  errorMessage=`Error : ${error.error.message}`
}
else{
  errorMessage=`Status : ${error.status} \n Message: ${error.message}`;
}
return throwError(errorMessage);
 }
 

}
