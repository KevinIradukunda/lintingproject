import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../models/user.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-list",
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
