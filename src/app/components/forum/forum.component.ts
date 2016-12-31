import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'forum',
  styleUrls: ['./forum.component.css'],
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {
  posts: any[];
  title: string;
  postContent: string;
  user: string;
  date: string;

  constructor(private dataService: DataService) {
    this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
  }

  ngOnInit() {

  }

  isvisible: boolean = true;
  clicked() {
    this.isvisible = !this.isvisible;
    console.log(this.isvisible);
  }

  addBabysitter(): void {
    let newPost = {
      title: this.title,
      postContent: this.postContent,
      user: this.user,
      date: this.date
    };

    this.dataService.addForumPost(newPost).subscribe(post => {
      this.posts.push(post);
      this.title = '';
      this.postContent = '';
      this.user = 'Hasan';
      this.date = new Date().toLocaleTimeString()
      this.dataService.getForumPosts().subscribe(posts => { this.posts = posts; });
    });
  }
}
