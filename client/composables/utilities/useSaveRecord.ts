import Swal from 'sweetalert2';

export const useSaveRecord = () => {

    const createRecord = (url: string): void => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to SAVE this new User record!",
            icon: 'warning',
            iconColor: '#F59E0B',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonColor: '#009432',
            confirmButtonText: 'Yes, Please!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    iconColor: '#009432',
                    title: 'User has been saved successfully!',
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        });
    }

    const updateRecord = (url: string): void => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to UPDATE this User record!",
            icon: 'warning',
            iconColor: '#F59E0B',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonColor: '#009432',
            confirmButtonText: 'Yes, Please!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    iconColor: '#009432',
                    title: 'User has been updated successfully!',
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        });
    }

    return { createRecord, updateRecord }
}