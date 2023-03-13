import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service: MovieApiServiceService) {
  }

  bannerResult:any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
     // console.log(result, 'bannerresult#')
      this.bannerResult = result.results
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
    //  console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }
}
