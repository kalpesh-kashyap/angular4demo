import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedUser: String = "";
  files = [];
  pdf = {};

  changepatter(event: any) {
    this.selectedUser = (event.target.value.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    this.files = [{title: 'pdf1', url: 'http://www.pdf995.com/samples/pdf.pdf'}, {
      title: 'pdf2',
      url: 'http://che.org.il/wp-content/uploads/2016/12/pdf-sample.pdf'
    }]
  }

  passDataToModal(data) {
    this.pdf = data;
  }
}
