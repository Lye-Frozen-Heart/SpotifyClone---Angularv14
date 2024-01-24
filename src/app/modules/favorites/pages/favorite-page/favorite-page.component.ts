import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Favorites");
   }

  ngOnInit(): void {
  }

}
