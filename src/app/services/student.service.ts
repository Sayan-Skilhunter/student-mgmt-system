import { Injectable } from '@angular/core';

export interface StudentService {
  studentId: string;
  studentName: string;
  studentDesc: string;
  show: boolean;
}
