import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { siswa } from 'src/app/models/siswa.model';
import { SiswaService } from 'src/app/services/siswa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-siswadetail',
  templateUrl: './siswadetail.component.html',
  styleUrls: ['./siswadetail.component.css']
})
export class SiswadetailComponent {

  model: siswa = {
    id: "",
    nis: "",
    name: "",
    gender: "",
    religion: "",
    address: "",
    study: "",
    class: ""
  }

  isEdit: boolean = false
  dataTamp: string = ''

  constructor(
    private siswaService: SiswaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.callGetRow()
  }

  //#region callgetrow
  callGetRow() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.isEdit = true;
        this.siswaService.getData(id).subscribe((data: siswa) => {
          this.model = data;
        });
      }
    });
  }
  //#endregion callgetrow

  //#region insert/update
  saveSiswa() {
    if (this.isEdit) {
      this.siswaService.updateSiswa(this.model).subscribe({
        next: (siswaResponse: siswa) => {
          Swal.fire({
            icon: 'success',
            title: 'Data Saved',
            text: 'Data Update Successfully',
          });
          console.log('Student save successfully:', siswaResponse);
          this.router.navigate(['/siswalist/siswadetail/', siswaResponse.id]);
          this.callGetRow();
        },
        error: (error: any) => {
          console.error('Error adding student:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong!, ${error}`,
          });
        }
      });
    } else {
      this.siswaService.addSiswa(this.model).subscribe({
        next: (siswaResponse: siswa) => {
          Swal.fire({
            icon: 'success',
            title: 'Data Saved',
            text: 'Data Created Successfully',
          });
          console.log('Student added successfully:', siswaResponse);
          this.router.navigate(['/siswalist/siswadetail/', siswaResponse.id]);
          this.callGetRow();
        },
        error: (error: any) => {
          console.error('Error adding student:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong!, ${error}`,
          });
        }
      });
    }
    //#endregion insert/update
  }
}
