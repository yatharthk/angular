import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers:[VideoService]
})
export class SearchDetailComponent implements OnInit,OnDestroy {

  private routeSub:any;
  searchTerm:string;
  req:any;
  videoList:[Video];
  constructor(private route:ActivatedRoute,private videoService:VideoService) { }

  ngOnInit(): void {
    this.routeSub=this.route.params.subscribe(
      params=>{
        // console.log("param",params['searchQuery']);
        this.searchTerm=params['searchQuery'];
        
      }
    );
    this.search(this.searchTerm);
  }

  search(query){
    let videoListNew=[];
    this.req=this.videoService.search(query).subscribe(data=>{
      videoListNew=<[Video]>data;
      // console.log(data);
      
      // console.log(this.videoList);
      this.videoList=<[Video]>videoListNew;
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

  getEmbedUrl(videoItem){
    return "https://www.youtube.com/embed/"+videoItem.embed;
    
  }

}
