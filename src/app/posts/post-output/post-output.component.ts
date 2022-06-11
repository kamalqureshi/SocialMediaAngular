import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-output',
  templateUrl: './post-output.component.html',
  styleUrls: ['./post-output.component.css']
})
export class PostOutputComponent implements OnInit {

  @Input() postDetails:Post[] = Array();

  // Create an object of PostServices
  constructor(public PostService: PostService) { }

  ngOnInit(): void {

    // Call the function of the object created above
    this.postDetails =  this.PostService.getPosts();
    this.PostService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.postDetails = posts
      })
  }

}
