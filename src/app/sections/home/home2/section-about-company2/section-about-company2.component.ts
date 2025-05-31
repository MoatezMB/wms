import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-about-company2',
  templateUrl: './section-about-company2.component.html',
  styleUrls: ['./section-about-company2.component.css']
})
export class SectionAboutCompany2Component {

  @Input() watermark_aside: any;

}
