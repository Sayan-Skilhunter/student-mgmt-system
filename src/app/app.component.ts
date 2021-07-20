import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  studentId: string = '';
  studentName: string = '';
  studentDesc: string = '';
  student: StudentService[] = [];
  title = 'student-management-system';
  onSave() {
    var p = {
      studentId: this.studentId,
      studentName: this.studentName,
      studentDesc: this.studentDesc,
      show: false
    }
    this.student.push(p);
    console.log(this.student);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
