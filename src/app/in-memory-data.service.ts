import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr. Mauro' },
      { id: 2, name: 'Capitan America' },
      { id: 3, name: 'El increíble Hulk' },
      { id: 4, name: 'Iron Man' },
      { id: 5, name: 'Liam Neeson' },
      { id: 6, name: 'Thor' },
      { id: 7, name: 'Black Panther' },
      { id: 8, name: 'Doctor Strange' },
      { id: 9, name: 'Ant-Man' },
      { id: 10, name: 'El Chapulin' }
    ];
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/