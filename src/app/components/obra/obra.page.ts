import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from 'src/app/model/obra';
import { ObrasService } from '../../services/obras.service';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.page.html',
  styleUrls: ['./obra.page.scss'],
})
export class ObraPage implements OnInit {
  obra:Obra = new Obra();
  uid:string;
  constructor(private route: ActivatedRoute, private router: Router,
    
    public obraService: ObrasService) { 
      console.log("globally",localStorage.getItem("uid"));
      this.uid = this.route.snapshot.paramMap.get('uid');
      this.uid = this.route.snapshot.paramMap.get('uid');
      this.route.queryParams.subscribe(params => {
        console.log(params);
        if (this.router.getCurrentNavigation().extras.queryParams) {
          this.obra = this.router.getCurrentNavigation().extras.queryParams.obra;
          console.log(this.obra.image);
        }
      });
  

}

  ngOnInit() {
  }

  guardarObra(){
    
  }
  cancelar(){
    const url='/view-cliente/'+ this.uid;
        this.router.navigate([url]); 
  }

}
