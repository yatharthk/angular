import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'VideoSite';
  caption="welcome to video Site built on Angular"
  private routeSub:any;
  query:string;

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.routeSub=this.route.params.subscribe(params=>{
      this.query=params['searchQuery'];
      // console.log(this.query);
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }
}
