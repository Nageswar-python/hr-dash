import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  stats = [
    { title: 'Attendance', value: '120/154', icon: 'ti ti-calendar' },
    { title: 'Projects', value: '90', icon: 'ti ti-browser' },
    { title: 'Clients', value: '69', icon: 'ti ti-users' },
    { title: 'Tasks', value: '225', icon: 'ti ti-checklist' }
  ];

  employees = [
    { name: 'Anthony Lewis', dept: 'Finance' },
    { name: 'Brian Villalobos', dept: 'Development' },
    { name: 'Stephan Peralt', dept: 'Marketing' }
  ];

  activities = [
    { user: 'Matt Morgan', action: 'Added new project' },
    { user: 'Jay Ze', action: 'Commented on document' },
    { user: 'Mary Donald', action: 'Approved task' }
  ];
}
