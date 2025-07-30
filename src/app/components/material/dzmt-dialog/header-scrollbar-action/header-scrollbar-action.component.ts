import {Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule,} from '@angular/material/dialog';
@Component({
  selector: 'app-header-scrollbar-action',
  templateUrl: './header-scrollbar-action.component.html',
  styleUrls: ['./header-scrollbar-action.component.css']
})
export class HeaderScrollbarActionComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}