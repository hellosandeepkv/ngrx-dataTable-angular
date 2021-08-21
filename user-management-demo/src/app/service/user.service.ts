import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataInterface } from './../models/user.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserParams } from './../models/user-params';
import { UserResponse } from '../models/user-response';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}
  public getUsers(params: UserParams): Observable<UserResponse> {
    return of(this.getMockUsers(params)).pipe(delay(3000));
  }
  private getMockUsers(params: UserParams): UserResponse {
    let data = <UserDataInterface[]>[];

    data = users.filter(
      (c) =>
        ~c.Role.toLocaleLowerCase().indexOf(params.filter) ||
        ~c.FullName.toLocaleLowerCase().indexOf(params.filter) ||
        ~c.Country.toLocaleLowerCase().indexOf(params.filter)
    );

   // data.sort((a, b) => (a[params.sortField] > b[params.sortField] ? 1 : -1) * (params.sortDirection === "asc" ? 1 : -1)); 

    return {
      total: data.length,
      users: data.slice(
        params.pageIndex * params.pageSize,
        (params.pageIndex + 1) * params.pageSize
      ),
    };
  }
}

const users = <UserDataInterface[]>[
  <UserDataInterface>{
    Id: 1,
    FullName: 'Violette Zute',
    Country: 'Spain',
    Role: 'Media Manager IV',
    Email: 'vzute0@oakley.com',
  },
  <UserDataInterface>{
    Id: 2,
    FullName: 'Margarete McRuvie',
    Country: 'Liberia',
    Role: 'Safety Technician III',
    Email: 'mmcruvie1@quantcast.com',
  },
  <UserDataInterface>{
    Id: 3,
    FullName: 'Karoly Holley',
    Country: 'Kiribati',
    Role: 'Legal Assistant',
    Email: 'kholley2@abc.net.au',
  },
  <UserDataInterface>{
    Id: 4,
    FullName: 'Idalina Holleworth',
    Country: 'China',
    Role: 'Food Chemist',
    Email: 'iholleworth3@usgs.gov',
  },
  <UserDataInterface>{
    Id: 5,
    FullName: 'Blinnie Kalinke',
    Country: 'France',
    Role: 'Senior Editor',
    Email: 'bkalinke4@booking.com',
  },
  <UserDataInterface>{
    Id: 6,
    FullName: 'Gerik BIddy',
    Country: 'Sweden',
    Role: 'Senior Financial Analyst',
    Email: 'gbIddy5@nature.com',
  },
  <UserDataInterface>{
    Id: 7,
    FullName: 'Lefty Labrom',
    Country: 'Sweden',
    Role: 'Financial Advisor',
    Email: 'llabrom6@360.cn',
  },
  <UserDataInterface>{
    Id: 8,
    FullName: 'Lucita Thorne',
    Country: 'Philippines',
    Role: 'VP Quality Control',
    Email: 'lthorne7@netscape.com',
  },
  <UserDataInterface>{
    Id: 9,
    FullName: 'Vlad Turneux',
    Country: 'Vietnam',
    Role: 'Database Administrator II',
    Email: 'vturneux8@newsvine.com',
  },
  <UserDataInterface>{
    Id: 10,
    FullName: 'Jobyna Hobben',
    Country: 'China',
    Role: 'Financial Advisor',
    Email: 'jhobben9@google.fr',
  },
  <UserDataInterface>{
    Id: 11,
    FullName: 'Rakel King',
    Country: 'China',
    Role: 'VP Quality Control',
    Email: 'rkinga@theguardian.com',
  },
  <UserDataInterface>{
    Id: 12,
    FullName: 'Angelica Tommaseo',
    Country: 'China',
    Role: 'Legal Assistant',
    Email: 'atommaseob@ifeng.com',
  },
  <UserDataInterface>{
    Id: 13,
    FullName: 'Prescott Sellen',
    Country: 'Palestinian Territory',
    Role: 'Legal Assistant',
    Email: 'psellenc@privacy.gov.au',
  },
  <UserDataInterface>{
    Id: 14,
    FullName: 'Adrianne Jewers',
    Country: 'Brazil',
    Role: 'Health Coach IV',
    Email: 'ajewersd@nationalgeographic.com',
  },
  <UserDataInterface>{
    Id: 15,
    FullName: 'Conrado Ciccarello',
    Country: 'Russia',
    Role: 'Data Coordiator',
    Email: 'cciccarelloe@slashdot.org',
  },
  <UserDataInterface>{
    Id: 16,
    FullName: 'Carrol Alban',
    Country: 'Czech Republic',
    Role: 'Database Administrator II',
    Email: 'calbanf@jugem.jp',
  },
  <UserDataInterface>{
    Id: 17,
    FullName: 'Katie Briatt',
    Country: 'Portugal',
    Role: 'Paralegal',
    Email: 'kbriattg@tmall.com',
  },
  <UserDataInterface>{
    Id: 18,
    FullName: 'Ingelbert Tremoulet',
    Country: 'Russia',
    Role: 'Compensation Analyst',
    Email: 'itremouleth@mediafire.com',
  },
  <UserDataInterface>{
    Id: 19,
    FullName: 'Warren holmes',
    Country: 'Czech Republic',
    Role: 'Project Manager',
    Email: 'wholmesi@bbb.org',
  },
  <UserDataInterface> {
    Id: 20,
    FullName: 'Armin Ellum',
    Country: 'Nicaragua',
    Role: 'Account Representative II',
    Email: 'aellumj@sciencedirect.com',
  },
  <UserDataInterface>{
    Id: 21,
    FullName: 'Averyl Wey',
    Country: 'Mexico',
    Role: 'Editor',
    Email: 'aweyk@pcworld.com',
  },
  <UserDataInterface>{
    Id: 22,
    FullName: 'Lewiss Vahl',
    Country: 'France',
    Role: 'Biostatistician IV',
    Email: 'lvahll@mac.com',
  },
  <UserDataInterface>{
    Id: 23,
    FullName: 'Boniface Bernardino',
    Country: 'Czech Republic',
    Role: 'GIS Technical Architect',
    Email: 'bbernardinom@wp.com',
  },
  <UserDataInterface>{
    Id: 24,
    FullName: 'Wiley Agron',
    Country: 'France',
    Role: 'Data Coordiator',
    Email: 'wagronn@sohu.com',
  },
  <UserDataInterface>{
    Id: 25,
    FullName: 'Sancho Torbet',
    Country: 'China',
    Role: 'Software Test Engineer IV',
    Email: 'storbeto@seesaa.net',
  }
];
