import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpacexapiService } from '../spacexapi.service'
import { Mission } from '../models/mission'

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = []

  selectedMission?: Mission

  constructor(
    private spacexapiService: SpacexapiService,
    
  ) { }

  ngOnInit(): void {
    this.getMissions()
  }

  getMissions(): void{
    this.missions = this.spacexapiService.fetchMissions()
  }

}
