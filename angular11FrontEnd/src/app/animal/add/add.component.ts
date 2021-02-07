import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  Name:string="";
  Species:string="";

  ngOnInit(): void {
  }

  addClick(){
    var animal = {
      Name:this.Name,
      Species:this.Species
    }
    this.service.addAnimal(animal).subscribe(result => {
      alert(result.toString());
      this.router.navigateByUrl("animal");
    });
  }
}
