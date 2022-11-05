import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],

})
export class PostListComponent implements OnInit {
  constructor(private postsService: PostsService) {}


  ngOnInit(): void {
    this.postsService.getAll().subscribe(console.log);
  }
}
