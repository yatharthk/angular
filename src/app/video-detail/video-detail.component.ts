
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-details',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers:[VideoService]
})
export class VideoDetailComponent implements OnInit,OnDestroy {

  constructor(private activatedRoute:ActivatedRoute,private videoService:VideoService) {}
  private routeSub:any;
  private req:any;
  slug:string;
  video:Video;
  ngOnInit(): void {
    this.getBySlug();
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  
  }


  getBySlug(){

    this.routeSub=this.activatedRoute.params.subscribe(params=>{
      // console.log(params);
      this.slug=params['slug'];
     this.req= this.videoService.get(this.slug).subscribe(data=>{
        this.video=<Video>data[0];
        // console.log(this.video);
        
      })
    });
  }

  


  getEmbedUrl(videoItem){
    // console.log(videoItem);
    
    return "https://www.youtube.com/embed/"+videoItem;
    
  }
}
