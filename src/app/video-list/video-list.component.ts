import { Component, OnInit,OnDestroy } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers:[VideoService]
})
export class VideoListComponent implements OnInit,OnDestroy {

  req:any;
  // someItem="<h1>Hello There</h1>"
  videoList:[];

  constructor(private videoService:VideoService) {}
  
  ngOnInit(): void {
  // this.req=this.http.get('assets/json/videos.json').subscribe(data=>{
  //   console.log(data);
  //   this.videoList=data;
    
  // })

  this.req=this.videoService.list().subscribe(data=>{
    console.log(data);
    this.videoList=JSON.parse(data);
    
  })
  }



  ngOnDestroy(){
    this.req.unsubscribe();
  }
  

  getEmbedUrl(videoItem){
    return "https://www.youtube.com/embed/"+videoItem.embed;
    
  }

}
