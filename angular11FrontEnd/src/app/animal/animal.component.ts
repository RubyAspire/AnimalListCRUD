import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor(private service:SharedService) { }
  AnimalList:any = [];
  animal:any;

  ngOnInit(): void {
    this.refreshAnimalList();
  }

  refreshAnimalList(){
    this.service.getAnimals().subscribe(data =>{
      this.AnimalList = data;
    });
  }

  deleteClick(item:any){
    if(confirm("Are you sure you want to delete this item?")){
      this.service.deleteAnimal(item.Id).subscribe(result =>{
        alert(result.toString());
        this.refreshAnimalList();
      });
    } 
  }

}
