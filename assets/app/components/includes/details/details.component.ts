import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { User } from './../../pages/auth/auth.model';

@Component({
    selector: 'detail',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
    providers: [DetailsService]
})
export class DetailsComponent implements OnInit{

    private user : User;

    constructor(private detailsService : DetailsService){}   

    ngOnInit(){

        var userId = localStorage.getItem('userId');
        
        this.detailsService.getUser(userId)
            .subscribe(
                (user: User) => {
                    this.user = user
                }
            );

        console.log(this.user);
    }
}
