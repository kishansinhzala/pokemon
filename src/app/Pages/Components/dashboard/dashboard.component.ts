import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result:any;
  searchText:any='';
  
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.onGetData().subscribe((res:any)=>{
      this.result=res.results 
      console.log(".................",res);
      
      this.result.map((data:any)=>{
        console.log( data.url.split('/pokemon/')[1].split('/')[0]);
        
        data['imageUrl']=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          data.url.split('/pokemon/')[1].split('/')[0]}.png`;
      })     
    })
    console.log(this.result);
    
  }


}
