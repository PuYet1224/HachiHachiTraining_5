import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDto, EMPLOYEES_DATA } from '../data/employee.dto';

@Component({
  selector: 'app-grid-wrapper',
  templateUrl: './grid-wrapper.component.html',
  styleUrls: ['./grid-wrapper.component.scss']
})
export class GridWrapperComponent implements OnInit {
  data: Array<{
    fullName: string;
    gender?: string;
    birthYear?: string;
    email?: string;
    phone?: string;
    account?: string;
    company?: string;
    cccd?: string;
  }> = [];

  openedRowIndex: number | null = null; // Dòng đang mở menu
  popupAnchor: any; // Lưu anchor của popup 

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.data = EMPLOYEES_DATA.map((emp: EmployeeDto) => ({
      fullName: [emp.lastName, emp.middleName, emp.firstName].filter(Boolean).join(' '),
      birthYear: emp.dateOfBirth ? emp.dateOfBirth.slice(0, 4) : '', 
      phone: emp.phoneMobile1,
      email: emp.personalEmail,
      account: emp.userName,
      company: emp.belongsToCompanies?.join(', '),
      cccd: emp.nationalId
    }));
  }

  toggleMenu(rowIndex: number, button: HTMLElement): void {
    if (this.openedRowIndex === rowIndex) {
      this.openedRowIndex = null;
    } else {
      this.openedRowIndex = rowIndex;
      this.popupAnchor = button; 
    }
    this.cdr.detectChanges(); 
  }
  

  openEditPage(dataItem: any) {
    this.router.navigate(['/edit-page']);
  }
}
