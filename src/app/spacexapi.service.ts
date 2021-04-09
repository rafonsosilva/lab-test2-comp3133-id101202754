import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mission } from './models/mission'

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  missions$: any

  missions: Mission[] = []

  private missionsUrl = 'https://api.spacexdata.com/v3/launches'

  constructor(private http: HttpClient) { }

  fetchRawData(): Observable<Object> {
    return this.http.get(this.missionsUrl)
  }

  fetchMissions() {
    this.missions$ = this.fetchRawData()
    return this.getMissionsData()
  }

  getMissionsData(): Mission[] {
    this.missions$.forEach((element: any) => {
      element.forEach((eachMission: any) => {
        const { flight_number, mission_name, launch_year, details, links } = eachMission
        const mission_patch_small: string = links.mission_patch_small
        const mission: Mission = { flight_number, mission_name, launch_year, details, mission_patch_small}
        this.missions.push(mission)
      })
    });
    return this.missions
  }

  findMission(id: number): any {
    const allMissions = this.fetchMissions()
    return allMissions.find(mission => mission.flight_number == id)

  }

}
