import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserToCreate } from './UserToCreate';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-app',
  templateUrl: './upload-app.component.html',
  styleUrls: ['./upload-app.component.scss']
})
export class UploadAppComponent implements OnInit {
  public isCreate: boolean;
  public name: string;
  public address: string;
  public user: UserToCreate;
  public users: User[] = [];
  public response: {dbPath: ''};

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.isCreate = true;
  }

  public onCreate = () => {
    this.user = {
      name: this.name,
      address: this.address,
      imgPath: this.response.dbPath
    }

    this.http.post('https://localhost:5001/api/users', this.user)
    .subscribe(res => {
      this.getUsers();
      this.isCreate = false;
    });
  }

  private getUsers = () => {
    this.http.get('https://localhost:5001/api/users')
    .subscribe(res => {
      this.users = res as User[];
    });
  }

  public returnToCreate = () => {
    this.isCreate = true;
    this.name = '';
    this.address = '';
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:5000/${serverPath}`;
  }
}
