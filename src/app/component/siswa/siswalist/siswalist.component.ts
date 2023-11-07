import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { siswa } from 'src/app/models/siswa.model';
import { SiswaService } from 'src/app/services/siswa.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-siswalist',
  templateUrl: './siswalist.component.html',
  styleUrls: ['./siswalist.component.css']
})
export class SiswalistComponent {

  siswas: siswa[] = []
  route: any;
  rowNumber: number = 1;

  constructor(
    private siswaServices: SiswaService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadData()
  }

  //#region loadData
  loadData() {
    this.siswaServices.getAllData().subscribe({
      next: (siswas) => {
        this.siswas = siswas.map((siswa) => {
          siswa.rowNumber = this.rowNumber++;
          return siswa;
        });
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  //#endregion loadData

  //#region Guid check
  isValidGuid(id: string): boolean {
    // The regex pattern for a valid GUID format
    const guidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    // Use the test method to check if the id matches the pattern
    return guidPattern.test(id);
  }
  //#endregion Guid check

  //#region editBtn
  editBtn(id: any) {
    if (this.isValidGuid(id)) {
      this.router.navigate(['/siswalist/siswadetail/', id]);
    } else {
      console.error('Invalid GUID:', id);
    }
  }
  //#endregion editBtn

  //#region delete
  delete(id: any) {
    this.siswaServices.deleteData(id)
      .subscribe(
        () => {
          console.log('Siswa deleted successfully');
          this.router.navigate(['/siswalist']);
          this.loadData();
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong!, ${error}`,
          })
        }
      );
  }
  //#endregion delete

  //#region deleteBtn
  deleteBtn(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#498652',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You succesfully delete the data",
          icon: 'warning',
          confirmButtonColor: '#498652',
          confirmButtonText: 'Yes'
        })
        this.delete(id)
      }
    })
  }
  //#endregion deleteBtn

}
