import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    // Restore sidebar state on reload
    const state = localStorage.getItem('screenModeNightTokenState');
    if (!state) {
      document.body.classList.add('mini-sidebar');
    }
  }

  /* ============================
     DESKTOP SIDEBAR TOGGLE
  ============================ */
  toggleSidebar(event: Event): void {
    event.preventDefault();

    const body = document.body;
    const headerLeft = document.querySelector('.header-left');
    const toggleBtn = document.getElementById('toggle_btn');

    if (body.classList.contains('mini-sidebar')) {
      body.classList.remove('mini-sidebar');
      toggleBtn?.classList.add('active');
      localStorage.setItem('screenModeNightTokenState', 'night');

      setTimeout(() => {
        headerLeft?.classList.add('active');
      }, 100);
    } else {
      body.classList.add('mini-sidebar');
      toggleBtn?.classList.remove('active');
      localStorage.removeItem('screenModeNightTokenState');

      setTimeout(() => {
        headerLeft?.classList.remove('active');
      }, 100);
    }
  }

  /* ============================
     MOBILE SIDEBAR TOGGLE
  ============================ */
  toggleMobileSidebar(event: Event): void {
    event.preventDefault();
    document.body.classList.toggle('slide-nav');

    if (document.body.classList.contains('slide-nav')) {
      this.addOverlay();
    } else {
      this.removeOverlay();
    }
  }

  closeMobileSidebar(): void {
    document.body.classList.remove('slide-nav');
    this.removeOverlay();
  }

  /* ============================
     OVERLAY HANDLING
  ============================ */
  private addOverlay(): void {
    if (!document.querySelector('.sidebar-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.onclick = () => this.closeMobileSidebar();
      document.body.appendChild(overlay);
    }
  }

  private removeOverlay(): void {
    document.querySelector('.sidebar-overlay')?.remove();
  }
}
