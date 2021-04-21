import { HttpClient } from '@angular/common/http';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {

  @Input()
  queryFromParent:string;



  searchQuery:string="New Search";
  req:any;
  result=[];
  constructor(private videoService:VideoService,private router:Router) { }

  ngOnInit(): void {
    if(this.queryFromParent){
      this.searchQuery=this.queryFromParent;
    }
  }

  searchTerm(searchForm){
    console.log(searchForm.value);
    let query=searchForm.value.searchQuery;
    if(query==undefined){
      this.router.navigate(['/search',{searchQuery:""}]);
    }
    else{
      this.router.navigate(['/search',{searchQuery:query}]);
    }
    // this.req=this.http.get("assets/json/videos.json").subscribe(videoItem=>{
    //   // (<[any]>videoItem).filter(item=>{
    //     // console.log(item);
        
    //   //   console.log(item.name.toString());
    //   //   if(searchForm.value.searchQuery.toString().toLowerCase()== item.name.toString().toLowerCase()){
    //   //     this.result.push(item);
    //   //   }
    //   // })
    // });
    // this.req=this.videoService.search(this.searchQuery).subscribe(videoItem=>{
    //   console.log(videoItem);
      
    // })
    // console.log(this.result);
    
  }



  ngOnDestroy(){
    // this.req.unsubscribe();
  }



}
