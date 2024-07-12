// movie-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.http.get<any[]>('http://localhost:3000/api/movies').subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => { 
        console.error('Error fetching movies:', error);
      }
    );
  }
}
