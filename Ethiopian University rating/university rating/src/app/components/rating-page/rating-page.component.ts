import { Component, ɵfindLocaleData } from '@angular/core';
import { Name } from 'src/app/models/Name';
import { RatingService } from 'src/app/services/rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent {
 
public loading:boolean=false;
public name:Name[]=[];
public contactId: string|null=null;
public contact:Name={} as Name;
public errorMessage:string|null=null;
public statusID1:boolean=false;
public statusID2:boolean=false;
public statusID3:boolean=false;
public statusID4:boolean=false;
public statusID5:boolean=false;
public clickhandler1:boolean=false;
public clickhandler2:boolean=false;
public clickhandler3:boolean=false;
public clickhandler4:boolean=false;
public clickhandler5:boolean=false;
public id:string|null=null;
public rating:string|null=null;
public NoOfrate:number=0;
public SNoOfrate:string|null=null;
constructor(private http:HttpClient,private ratingService:RatingService){

}
ngOnInit(): void{
  this.getAllContactsFromServer();
}
public getAllContactsFromServer(){
  this.loading=true;
  this.ratingService.getAllContacts().subscribe((data:Name[])=>{
    this.name=data;
    this.loading=false;
   
  },(error)=>{
    this.errorMessage=error;
    this.loading=false;
  }
  );
}
 public clickEvent1(universityId: string|undefined){
  if(universityId){
    this.id=universityId;
   if(!this.clickhandler2&&!this.clickhandler3&&!this.clickhandler4&&!this.clickhandler5){
      this.statusID1=!this.statusID1;
       this.clickhandler1=!this.clickhandler1;
       }
 }    
 
 }

public clickEvent2(universityId: string|undefined){
  if(universityId){
    this.id=universityId;
  if(!this.clickhandler1&&!this.clickhandler3&&!this.clickhandler4&&!this.clickhandler5){
 this.statusID1=!this.statusID1;
  this.statusID2=!this.statusID2;
  this.clickhandler2=!this.clickhandler2;
  }
}
}

public clickEvent3(universityId: string|undefined){
  if(universityId){
    this.id=universityId;
  this.statusID1=!this.statusID1;
  this.statusID2=!this.statusID2;
  this.statusID3=!this.statusID3;
  this.clickhandler3=!this.clickhandler3;
  }
}

public clickEvent4(universityId: string|undefined){
  if(universityId){
    this.id=universityId;
  if(!this.clickhandler1&&!this.clickhandler2&&!this.clickhandler3&&!this.clickhandler5){
  this.statusID1=!this.statusID1;
  this.statusID2=!this.statusID2;
  this.statusID3=!this.statusID3;
  this.statusID4=!this.statusID4;
  this.clickhandler4=!this.clickhandler4;
  }
}
}

public clickEvent5(universityId: string|undefined){
  if(universityId){
    this.id=universityId;
  if(!this.clickhandler1&&!this.clickhandler2&&!this.clickhandler3&&!this.clickhandler4){
  this.statusID1=!this.statusID1;
  this.statusID2=!this.statusID2;
  this.statusID3=!this.statusID3;
  this.statusID4=!this.statusID4;
  this.statusID5=!this.statusID5;
  this.clickhandler5=!this.clickhandler5;
  }
}
}


public saveRate(name:string|undefined,photo:string|undefined,rating:string,totrate:string, SAvRate:string,rateNo:string,universityId:string|undefined){

  let AvRate:number;
 
  let rate:number=parseInt(rateNo);
 rate++;
  let Srate:String=rate.toString();
  if(totrate==""){
    totrate="0";
  }
  if(rating=""){
    rating="0";
  }
  let Nrating:number=parseInt(totrate);
  let totRate:number;
  if(universityId){
    if(!this.statusID1&&!this.statusID2&&!this.statusID3&&!this.statusID4&&!this.statusID5){
      alert('please fill a rate');
      this.rating="";
    }
    else if(this.statusID1&&!this.statusID2&&!this.statusID3&&!this.statusID4&&!this.statusID5){
      this.rating="1";
      
    }
    else if(this.statusID1&&this.statusID2&&!this.statusID3&&!this.statusID4&&!this.statusID5){
      this.rating="2";
    }
    else if(this.statusID1&&this.statusID2&&this.statusID3&&!this.statusID4&&!this.statusID5){
      this.rating="3";
    }
    else if(this.statusID1&&this.statusID2&&this.statusID3&&this.statusID4&&!this.statusID5){
      this.rating="4";
    }
    else{
      this.rating="5";
    }
     totRate=Nrating+parseInt(this.rating);
    AvRate=totRate/rate;
    let SAvRate:string=AvRate.toString();
    let StotRate:string=totRate.toString();
    this.http.put(`http://localhost:9000/Names/${universityId}`,{name:name,
    photo: photo,
    rating:this.rating,
    totRate:StotRate,
    AvRate:SAvRate,
    NoOfRating:Srate}).subscribe((response)=>{
      console.log(response);
    }); 
  }
this.NoOfrate=0;
 
 }
}
