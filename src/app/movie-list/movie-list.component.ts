import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, createUrlTreeFromSnapshot, Router, RouterModule } from '@angular/router';


interface Movie {
  title: string;
  year: number;
  genre: string[];
  director: string;
  image: string;

}
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone : true,
  imports : [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  returnUrl !: string;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.loadSampleMovies();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loadSampleMovies(): void {
    this.movies = [
      {
        title: 'Guardians of the Galaxy Vol. 3',
        year: 2024,
        genre: ['Action', 'Adventure', 'Comedy'],
        director: 'James Gunn',
        image: 'https://i.redd.it/p4nhl3a0lep31.png'
      },
      {
        title: 'Kung Fu Panda 4 ',
        year: 2024,
        genre: ['Action', 'Anime', 'Fantasy'],
        director: 'Sam Raimi',
        image: 'https://image.tmdb.org/t/p/original/43yW06Bm59dtspbeW8OXPmjAVc7.jpg'
      },
      {
        title: 'John Wick: Chapter 4',
        year: 2024,
        genre: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        image: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2022/12/john-wick-4-poster.jpeg'
      },
      {
        title: 'The Marvels',
        year: 2024,
        genre: ['Action', 'Adventure', 'Fantasy'],
        director: 'Nia DaCosta',
        image: 'https://images.hdqwalls.com/download/the-marvels-poster-4k-bh-1080x1920.jpg'
      },
      {
        title: 'Indiana Jones 5',
        year: 2024,
        genre: ['Action', 'Adventure'],
        director: 'James Mangold',
        image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/indiana-jones-and-the-dial-of-destiny-poster.jpg'
      },

      {
        title: 'Jurassic World: Dominion',
        year: 2022,
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Colin Trevorrow',
        image: 'https://www.kinonews.ru/insimgs/2024/poster/poster122279_1.webp'
      },
      {
        title: 'Avenger : Endgame',
        year: 2022,
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Colin Trevorrow',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be030e77758917.5c911d5121625.png'
      }
    ];
  }
  bookTicket() {
    // const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    // const urlTree = createUrlTreeFromSnapshot(snapshot, ['/booking', movie.title]);
    // this.router.navigateByUrl(urlTree);
    this.router.navigate(['/booking']);
  }
}
