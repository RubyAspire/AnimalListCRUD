import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, public activatedRoute: ActivatedRoute) { }

  animal:any;
  Id:any;
  Name:string="";
  Species:string="";

  ngOnInit(): void {
    this.Id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetails(this.Id);
  }

  getDetails(val:any){
    this.service.getDetails(val).subscribe(data =>{
        this.animal =data;
        this.Name =this.animal.Name;
        this.Species = this.animal.Species;
    });
  }

  updateAnimal(){
    var animal = {
      Id:this.Id,
      Name:this.Name,
      Species:this.Species
    }
    this.service.updateAnimal(animal).subscribe(result => {
        alert(result.toString());
        this.router.navigateByUrl("/animal");
    });
  }
}
