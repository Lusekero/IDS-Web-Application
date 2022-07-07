import Swal from 'sweetalert2';

export const useDeleteRecord = () => {

    const deleteRecord = (url: string): void => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to DELETE this User record!",
            icon: 'warning',
            iconColor: '#F59E0B',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            confirmButtonColor: '#E11D48',
            confirmButtonText: 'Yes, Please!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    iconColor: '#009432',
                    title: 'User has been deleted successfully!',
                    showConfirmButton: false,
                    timer: 2500
                })
            }
        });
    }

    return deleteRecord
}