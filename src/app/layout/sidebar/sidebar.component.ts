import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initSubMenus();
    this.activateCurrentMenu();
  }

  /* ============================
     SUBMENU TOGGLE
  ============================ */
  private initSubMenus(): void {
    const submenuLinks = document.querySelectorAll(
      '.sidebar-menu li.submenu > a'
    );

    submenuLinks.forEach(link => {
      link.addEventListener('click', (event: Event) => {
        event.preventDefault();

        const parentLi = link.parentElement as HTMLElement;
        const submenu = link.nextElementSibling as HTMLElement;
        const parentUl = parentLi.parentElement as HTMLElement;

        if (!link.classList.contains('subdrop')) {
          // Close all siblings
          parentUl.querySelectorAll('ul').forEach(ul => {
            (ul as HTMLElement).style.display = 'none';
          });

          parentUl.querySelectorAll('a.subdrop').forEach(a => {
            a.classList.remove('subdrop');
          });

          // Open selected
          submenu.style.display = 'block';
          link.classList.add('subdrop');
        } else {
          submenu.style.display = 'none';
          link.classList.remove('subdrop');
        }
      });
    });
  }

  /* ============================
     AUTO OPEN ACTIVE MENU
  ============================ */
  private activateCurrentMenu(): void {
    const activeLinks = document.querySelectorAll(
      '.sidebar-menu li.submenu a.active'
    );

    activeLinks.forEach(activeLink => {
      const submenuLi = activeLink.closest('li.submenu');
      const parentAnchor = submenuLi?.querySelector(':scope > a');
      const submenu = parentAnchor?.nextElementSibling as HTMLElement;

      if (parentAnchor && submenu) {
        parentAnchor.classList.add('subdrop');
        submenu.style.display = 'block';
      }
    });
  }
}
