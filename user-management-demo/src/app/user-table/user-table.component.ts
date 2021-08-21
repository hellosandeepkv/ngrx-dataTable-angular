import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { UserParams } from '../models/user-params';
import { UserDataInterface } from '../models/user.model';
import { GlobalState } from '../state/global.state';
import { UserLoadAction } from '../state/user.actions';
import {
  selectAllUser,
  selectUserError,
  selectUserLoading,
  selectUserTotal,
} from '../state/user.selectors';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit, OnDestroy, AfterViewInit {
  public displayedColumns: string[] = [
    'Id',
    'FullName',
    'Country',
    'Role',
    'Email',
  ];
  public dataSource!: MatTableDataSource<UserDataInterface>;
  public userTotal: number;
  public noData: UserDataInterface[] = [<UserDataInterface>{}];
  public loading: boolean;
  public error$: Observable<boolean>;
  public defaultSort: Sort = { active: 'role', direction: 'asc' };
  public filterSubject = new Subject<string>();
  private subscription: Subscription = new Subscription();
  private filter: string = '';

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<UserDataInterface>;

  constructor(public store: Store<GlobalState>) {}
  public ngOnInit(): void {
    this.store
      .pipe(select(selectAllUser))
      .subscribe((users) => this.initializeData(users));
    this.store
      .pipe(select(selectUserTotal))
      .subscribe((total) => (this.userTotal = total));
    this.subscription.add(
      this.store.pipe(select(selectUserLoading)).subscribe((loading) => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      })
    );
    this.error$ = this.store.pipe(select(selectUserError));
  }

  public ngAfterViewInit(): void {
    this.loadUsers();
    let filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    // let sort$ = this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0));

    this.subscription.add(
      merge(filter$, this.paginator.page)
        .pipe(tap(() => this.loadUsers()))
        .subscribe()
    );
  }

  private loadUsers(): void {
    this.store.dispatch(
      new UserLoadAction(<UserParams>{
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        //  sortDirection: this.sort.direction,
        // sortField: this.sort.active
      })
    );
  }

  private initializeData(users: UserDataInterface[]): void {
    this.dataSource = new MatTableDataSource(
      users.length ? users : this.noData
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public retry(): void {
    this.loadUsers();
  }

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * users.length);
  //   this.dataSource.push(users[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }
}
