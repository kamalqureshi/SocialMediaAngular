// Evenet emitters ae used to send an object to parent components
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {

  // Properties
  postContent = '';
  postTitle = '';

  /*
    Creating a new event listener that listens
    to object type of Post
    Output is used to wmit to parent component
  */
  @Output() postCreated = new EventEmitter<Post> ();



  constructor(public PostService:PostService ) { }

  ngOnInit(): void {
  }

   /*
    The form submitted with an object created that has
    the values of the form.
  */
  onSubmitNewPost(form: NgForm) {

    // // A new object of type Post is created
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };

    // // Emitting Post
    // this.postCreated.emit(post);


    // Another way using Post Services
    // We craeted the post which is stired in services
    this.PostService.createPost(form.value.title, form.value.content);

  }

}
