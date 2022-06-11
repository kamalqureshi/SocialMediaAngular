// The main page
// Index page calls the Angular tag for this page
// From this page rest of the components are linked and attached

import { Component, Input } from '@angular/core';

// The model we created for Post
// Makes the code more maintaiable
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularDemo';

  /*
    Created an array of Stored Posts of type Post

    This stores all the posts that we recieve as
    events from the create-post component

    The input decorator here tells that this property is
    sent to another compnonent
  */

  @Input() storedPosts: Post[] = Array();

  // Recieve a post of type Post
  onPostAdded(post: Post) {

    // Push statements are used to add an object to an array
    this.storedPosts.push(post);
  }
}
