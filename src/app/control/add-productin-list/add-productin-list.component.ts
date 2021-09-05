import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-productin-list',
  templateUrl: './add-productin-list.component.html',
  styleUrls: ['./add-productin-list.component.scss']
})
export class AddProductinListComponent implements OnInit {
  form: FormGroup;
  constructor(public authService: AuthService, public router: Router, public fb: FormBuilder, private actRoute: ActivatedRoute) {
//    console.log(localStorage.getItem('_id'));
      this.form=this.fb.group({
      name: [''],
      category: [''],
      price: [],
      quantity: [],
     seller_id:[localStorage.getItem('_id')]
    })
   }

  
  ngOnInit(): void {  }


  addToList(): void{
    console.log("clicked on add");
      console.log(this.form);
      this.authService.addProduct(this.form.value).subscribe((res) => {
       if (res.result) {
        console.log(res.result);
        this.form.reset();
      }
    });
  }

  clicked1(){
    console.log("clicked lower button");
  }
}
