import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { filter, lastValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild(MatDrawer) sidenav!: MatDrawer;

  title: string = 'Welcome';

  constructor(private observer: BreakpointObserver, private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;

          if (!!child && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }

          return this.title;
        })
      ).subscribe((title: string) => {
        this.title = title;
      });
  }

  ngAfterContentInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (!!this.sidenav) {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    });
  }
}
