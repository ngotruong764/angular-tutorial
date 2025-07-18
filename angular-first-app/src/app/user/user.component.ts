import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  public get imagePath() {
    return 'assets/users/'+this.avatar;
  }

  public onSelectUser(): void {}
}
