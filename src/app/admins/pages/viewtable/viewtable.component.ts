import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {
  datas: any=[];

  constructor(private service:AdminService) { }

  ngOnInit(): void {

    this.service.viewTable().subscribe((result)=>{
      this.datas=result;
    })
  }

}
