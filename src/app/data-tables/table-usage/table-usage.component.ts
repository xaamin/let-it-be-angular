import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';

import { FakeStoreApiUsersService } from '../services/fake-api-users.service';


@Component({
  selector: 'table-usage',
  templateUrl: './table-usage.component.html',
  styleUrls: ['./table-usage.component.scss']
})
export class TableUsageComponent implements OnInit, AfterContentInit {

  isBusy: boolean = false;

  data = new MatTableDataSource<any>([]);

  constructor(private moviesService: FakeStoreApiUsersService) { }

  ngOnInit(): void {
  }

  async ngAfterContentInit(): Promise<void> {
    try {
      this.isBusy = true;

      const response = await lastValueFrom(this.moviesService.lists());

      this.data = new MatTableDataSource<any>(response);
    } catch (error) {
      throw error
    } finally {
      setTimeout(() => {
        this.isBusy = false;
      }, 500);
    }
  }

}
