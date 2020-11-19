import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {
  datas: any=[];

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.viewFood().subscribe((result)=>{
      this.datas=result;
    })
  }


}
