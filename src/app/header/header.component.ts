import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';




export class Doctor {
  constructor(public name: string) {
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
modalReference: any;
length:number;
doctorCtrl:FormControl;
filteredDoctor: Observable<any[]>;
// tslint:disable-next-line: max-line-length
  constructor(config: NgbModalConfig, private modalService: NgbModal){
    config.backdrop = 'static';
    config.keyboard = false;
  }
 

  // routes=[
  //   {linkName:'Home',url:'home'},
  //   {linkName:'Services',url:'services'},
  //   {linkName:'About',url:'about'},
  //   {linkName:'Log in / Sign up',url:'login-signup'},
  // ]
  //google autocomplete code
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  public handleAddressChange() {
  }


        //Routing Components

        // routes=[
        //   {linkName:'Home', url:'home'},
        //   {linkName:'Service', url:'services'},
        //   {linkName:'About',url:'about'}
        // ]
        // homeRoute= 'home';
        // servicesRoute= "services";
        // aboutRoute= "about";
        //login_signupRoute= 'login&signup';

  // Array declaration
// tslint:disable-next-line: member-ordering
  doctor_lis: Doctor[] = [
    {name: 'Primary Care Doctor (PCP)'},
    {name: 'OB-GYN (Obstetrician-Gynecologist)'},
    {name: 'Dermatologist'},
    {name: 'Dentist'},
    {name: 'Ear, Nose & Throat Doctor (ENT / Otolaryngologist)'},
    {name: 'Eye Doctor'},
    {name: 'Psychiatrist'},
    {name: 'Orthopedic Surgeon (Orthopedist)'},
    {name: 'Acupuncturist'},
    {name: 'Allergist (Immunologist)'},
    {name: 'Audiologist'},
    {name: 'Cardiologist (Heart Doctor)'},
    {name: 'Cardiothoracic Surgeon'},
    {name: 'Chiropractor'},
    {name: 'Colorectal Surgeon'},
    {name: 'Dentist'},
    {name: 'Dermatologist'},
    {name: 'Dietitian / Nutritionist'},
    {name: 'Ear, Nose & Throat Doctor (ENT / Otolaryngologist)'},
    {name: 'Endocrinologist (incl Diabetes Specialists)'},
    {name: 'Eye Doctor'},
    {name: 'Gastroenterologist'},
    {name: 'Geriatrician'},
    {name: 'Hearing Specialist'},
    {name: 'Hematologist (Blood Specialist)'},
    {name: 'Infectious Disease Specialist'},
    {name: 'Infertility Specialist'},
    {name: 'Naturopathic Doctor'},
    {name: 'Nephrologist (Kidney Specialist)'},
    {name: 'Neurologist (incl Headache Specialists)'},
    {name: 'Neurosurgeon'},
    {name: 'OB-GYN (Obstetrician-Gynecologist)'},
    {name: 'Oncologist'},
    {name: 'Ophthalmologist'},
    {name: 'Optometrist'},
    {name: 'Oral Surgeon'},
    {name: 'Orthodontist'},
    {name: 'Orthopedic Surgeon (Orthopedist)'},
    {name: 'Pain Management Specialist'},
    {name: 'Pediatric Dentist'},
    {name: 'Pediatrician'},
    {name: 'Physiatrist (Physical Medicine)'},
    {name: 'Physical Therapist'},
    {name: 'Plastic Surgeon'},
    {name: 'Podiatrist (Foot and Ankle Specialist)'},
    {name: 'Primary Care Doctor (PCP)'},
    {name: 'Prosthodontist'},
    {name: 'Psychiatrist'},
    {name: 'Psychologist'},
    {name: 'Pulmonologist (Lung Doctor)'},
    {name: 'Radiologist'},
    {name: 'Rheumatologist'},
    {name: 'Sleep Medicine Specialist'},
    {name: 'Sports Medicine Specialist'},
    {name: 'Surgeon'},
    {name: 'Therapist / Counselor'},
    {name: 'Urgent Care Specialist'},
    {name: 'Urological Surgeon'},
    {name: 'Urologist'},
    {name: 'Vascular Surgeon'},
  ];





  ngOnInit() {
    this.doctorCtrl = new FormControl();
    this.filteredDoctor = this.doctorCtrl.valueChanges
      .pipe(startWith(''),map(doctor => doctor ? this.filterdoctor(doctor) : this.doctor_lis.slice())
    );
  }
  filterdoctor(name: string) {
    return this.doctor_lis.filter(doctor =>
      doctor.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  open(content) {
    this.modalService.open(content);
  }
  show(contents) {
    this.modalService.open(contents);
  }

}

