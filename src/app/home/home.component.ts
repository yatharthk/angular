import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  prevented=false;
  constructor(private router:Router,private videoService:VideoService) { }
  private req:any;
  videoImageDefault="assets/images/videos/imageDefault.jpg"
  // homePageList:[any];

  homeImageList=[
    // {image:"assets/images/nature/img1.jpg",title:"image1",slug:"/videos/video-1"},
  //   {image:"assets/images/nature/img2.jpg",title:"image2",slug:"/videos/video-2"},
  //   {image:"assets/images/nature/img3.jpg",title:"image3",slug:"/videos/video-3"}
  ]

  ngOnInit(): void {
    this.req=this.videoService.list().subscribe(data=>{
      // console.log(data);
      JSON.parse(data).filter(item=>{
        if(item.featured){
          this.homeImageList.push(item);
        }
      })
        // this.homeImageList=<any>data;
    })
  }

  preventNormal(event:MouseEvent,image:any){
    // console.log(event);
    if(!image.prevented){
    event.preventDefault();
    alert(image.link);
    // image.setAttribute("href","/videos");
    // image.link="/videos";
    // image.prevented=true;
    this.router.navigate(["./videos"])
    }

  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

}
