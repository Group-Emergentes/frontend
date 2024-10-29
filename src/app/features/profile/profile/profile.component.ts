import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userId: number=2;
  user: any;
  users = [
    {
      "id": 1,
      "userName": "Hassan Magdy",
      "occupation": "CEO. Pro",
      "avatar": "https://i.pinimg.com/564x/30/6f/d0/306fd0fb64f67ff40f81d8e37f8bf674.jpg",
      "phone": "900 000 000",
      "email": "h@com",
      "companyName": "Pro",
      "employees": "5-10",
      "location": "Alex av.15 400",
      "note": "I am available everyday from 9:00 am to 5:00 pm"
    },
    {
      "id": 2,
      "userName": "Frey Rodson",
      "occupation": "CEO. PRD",
      "avatar": "https://i.pinimg.com/564x/30/6f/d0/306fd0fb64f67ff40f81d8e37f8bf674.jpg",
      "phone": "922 455 666",
      "email": "fg@com",
      "companyName": "PRD company",
      "employees": "15-20",
      "location": "jr 20, Ital",
      "note": "I am available everyday from 9:00 am to 5:00 pm"
    }
  ]
  constructor(private _route:Router) {}

  ngOnInit(): void {
    this.user=this.users.find((user) => user.id === this.userId);
    console.log(this.user);
  }
}
