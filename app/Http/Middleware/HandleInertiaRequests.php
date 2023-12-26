<?php

namespace App\Http\Middleware;

use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

    
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'd_siswa' => [
                'profile_siswa' => Auth::check() ? Siswa::where('user_id', Auth::user()->id)->first() :'',
            ],
            'd_guru' => [
                'profile_guru' => Auth::check() ? Guru::where('user_id', Auth::user()->id)->first() :'',
            ],
        ];
    }
}
