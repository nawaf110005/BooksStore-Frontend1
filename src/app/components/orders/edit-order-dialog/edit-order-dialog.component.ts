import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css'],
})
export class EditOrderDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private booksService: BooksService
  ) {}

  onSaveClick(): void {
    // Call the service to update the order
    this.booksService.updateOrder(this.data).subscribe({
      next: (updatedOrder) => {
        console.log('Order updated successfully:', updatedOrder);
        this.dialogRef.close(updatedOrder);
      },
      error: (error) => {
        console.log('Error updating order:', error);
        // Handle error if necessary
      },
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
