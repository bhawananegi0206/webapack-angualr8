import { Component, OnInit } from '@angular/core';
import './menu.component.scss';
import {TranslateService} from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  localeid;
  constructor(private translate: TranslateService,private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(){
    this.localeid = this.route.snapshot.queryParamMap.get('locale') !== null ? this.route.snapshot.queryParamMap.get('locale') : "en";
    this.translate.setDefaultLang(this.localeid);
  }
}