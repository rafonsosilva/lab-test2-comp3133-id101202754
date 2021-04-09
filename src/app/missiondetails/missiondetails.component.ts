import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpacexapiService } from '../network/spacexapi.service'

import { Mission } from '../models/mission'

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input() mission?: Mission

  constructor(
    private route: ActivatedRoute,
    private spacexapiService: SpacexapiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMission()
  }


  getMission(): void{
    const id = this.route.snapshot.paramMap.get('id')
    if (id != null) {
      this.mission = this.spacexapiService.findMission(Number(id))
    }
  }

  goBack(): void {
    this.location.back();
  }

}
