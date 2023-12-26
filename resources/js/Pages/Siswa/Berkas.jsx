import React from 'react'
import App from '@/Layouts/App'
import { Link } from '@inertiajs/react'
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
export default function Berkas({ berkas }) {
    const url = import.meta.env.VITE_URL
    return (
        <App title="berkas">
            <h1 className='text-3xl font-semibold'>Berkas</h1>
            {(berkas.length < 1) && (
                <Link href='/berkas/create' className='btn btn-primary mt-6'><Icon className='text-xl' icon="material-symbols:upload-sharp" /> Upload Berkas</Link>
            )}
            {(berkas.length > 0) && (
                <div className='mt-5 grid grid-cols-4 gap-3'>
                    <img src={url + 'storage/' + berkas[0].kk} className='w-96 border-4' />
                    <img src={url + 'storage/' + berkas[0].ktp_ayah} className='w-96 border-4' />
                    <img src={url + 'storage/' + berkas[0].ktp_ibu} className='w-96 border-4' />
                    <img src={url + 'storage/' + berkas[0].akta_lahir} className='w-96 border-4' />
                    <img src={url + 'storage/' + berkas[0].ijazah} className='w-96 border-4' />
                </div>
            )}
            {(berkas.length > 0) && (
                <Link href={`/berkas/${berkas[0].id}/edit`} className='btn btn-primary mt-6'><Icon icon="bx:edit" /> Ubah Berkas</Link>
            )}
        </App>
    )
}
