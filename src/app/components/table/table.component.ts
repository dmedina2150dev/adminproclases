import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  position1: number;
  position2: number;
  position3: number;
  position4: number;
  position5: number;
  position6: number;
  position7: number;
  position8: number;
  position9: number;
  position10: number;
  position11: number;
  position12: number;
  weight: number;
  symbol: string;
  check: string;
  nombre: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {check: "true", nombre:"Nombreme  ",position: 1, position1: 1, position2: 1, position3: 1, position4: 1, position5: 1, position6: 1, position7: 1, position8: 1, position9: 1,position10: 1,position11: 1, position12: 1,  name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {check: "true", nombre:"Nombreme  ",position: 2, position1: 2, position2: 2, position3: 2, position4: 2, position5: 2, position6: 2, position7: 2, position8: 2, position9: 2,position10: 2,position11: 2, position12: 2,  name: 'Helium', weight: 4.0026, symbol: 'He'},
  {check: "true", nombre:"Nombreme  ",position: 3, position1: 3, position2: 3, position3: 3, position4: 3, position5: 3, position6: 3, position7: 3, position8: 3, position9: 3,position10: 3,position11: 3, position12: 3,  name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {check: "true", nombre:"Nombreme  ",position: 4, position1: 4, position2: 4, position3: 4, position4: 4, position5: 4, position6: 4, position7: 4, position8: 4, position9: 4,position10: 4,position11: 4, position12: 4,  name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {check: "true", nombre:"Nombreme  ",position: 5, position1: 5, position2: 5, position3: 5, position4: 5, position5: 5, position6: 5, position7: 5, position8: 5, position9: 5,position10: 5,position11: 5, position12: 5,  name: 'Boron', weight: 10.811, symbol: 'B'},
  {check: "true", nombre:"Nombreme  ",position: 6, position1: 6, position2: 6, position3: 6, position4: 6, position5: 6, position6: 6, position7: 6, position8: 6, position9: 6,position10: 6,position11: 6, position12: 6,  name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {check: "true", nombre:"Nombreme  ",position: 7, position1: 7, position2: 7, position3: 7, position4: 7, position5: 7, position6: 7, position7: 7, position8: 7, position9: 7,position10: 7,position11: 7, position12: 7,  name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {check: "true", nombre:"Nombreme  ",position: 8, position1: 8, position2: 8, position3: 8, position4: 8, position5: 8, position6: 8, position7: 8, position8: 8, position9: 8,position10: 8,position11: 8, position12: 8,  name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {check: "true", nombre:"Nombreme  ",position: 9, position1: 9, position2: 9, position3: 9, position4: 9, position5: 9, position6: 9, position7: 9, position8: 9, position9: 9,position10: 9,position11: 9, position12: 9,  name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {check: "true", nombre:"Nombreme",position: 10, position1: 10,position2: 10, position3: 10, position4: 10, position5: 10, position6: 10, position7: 10, position8: 10, position9: 10,position10: 10,position11: 10, position12: 10,  name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns:  string[];
  dataSource: any;
  constructor() {
    this.displayedColumns = ['check','nombre' , 'name','position','position1','position2','position3','position4','position5','position6','position7','position8','position9','position10','position11'];
    this.dataSource = ELEMENT_DATA;
  }

  ngOnInit(): void {
  }
}
