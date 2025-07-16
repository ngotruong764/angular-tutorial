import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Initialize signal
  public selectedUser = signal(DUMMY_USERS[randomIndex]);
  public imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);
  // public get imagePath(): string {
  //   return './assets/users/'+this.selectedUser().avatar;
  // }

  public onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // Update signal
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
