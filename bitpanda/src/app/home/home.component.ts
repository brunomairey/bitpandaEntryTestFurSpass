import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {




  url = `https://api.bitpanda.com/v1/masterdata`;
  url2 = 'https://jsonplaceholder.typicode.com/users';

  items = [];

valeurs='';

  constructor(private httpClient: HttpClient) { 

	this.httpClient.get(this.url).toPromise().then(data => 
  		{console.log(data);

  			for(let key in data)
  				if(data.hasOwnProperty(key))
  					this.items.push(data[key]);
  				console.log(this.items);
  				 });
	 
    }
// sendGetRequest(){this.valeurs = JSON.stringify(this.items);
//                document.writeln(this.valeurs);}

getKeys(obj){
    return Object.keys(obj)
  }
 

  ngOnInit(): void {
  }

}
