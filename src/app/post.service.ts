/*
  The purpose of this class is to ease the data sharing process between
  multiple components.

  We created a private object of posts and initialized with an empty array.

  Concept of Abstraction and Encapsulation

  [...this.posts] Creatinga  copy of array and sending as an object not
  refrence

  With this concept we do not need event listeners and data bindind
  We will import these in all the pages where Post is being used and
  we wil use the getter setters to manage the posts

  Dependency injection
 */


import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

// ProvidedIn basically creates a singleton of this object
// that is used by the app
@Injectable({providedIn: 'root'})
export class PostService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post []>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  createPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}
