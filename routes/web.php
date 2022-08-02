<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\BueatyController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaperController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PortFolioController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\TrashController;
use App\Mail\ForgotPassword;
use Illuminate\Http\Request;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'HtmlMinifier'], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::match(['GET', 'POST'], '/register', [AuthController::class, 'register']);
    Route::match(['GET', 'POST'], '/login', [AuthController::class, 'login'])->name('login');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/validate', [AuthController::class, 'validateRequest']);
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/blogs/{category_name}', [BlogController::class, 'index']);
    Route::get('/blog/{id}/{title}', [BlogController::class, 'single']);
    Route::get('/papers/{main_cat}/{category_name}', [PaperController::class, 'index']);
    Route::get('/paginate/{cat_id}/{pag_id}', [PaperController::class, 'paginate']);
    Route::get('/blogs/paginate/{cat_id}/{pag_id}', [BlogController::class, 'paginate']);
    Route::get('/portfolio', [PortFolioController::class, 'index']);
    Route::get('/about', [AboutController::class, 'index']);

    // Data routes to be deleted during production
    // Route::get('/store/category/paper', [DataController::class, 'storeCategories']);
    // Route::get('/store/paper', [DataController::class, 'storePapers']);
    // Route::get('/store/category/blog', [DataController::class, 'storeBlogCategories']);
    // Route::get('/store/main-categories', [DataController::class, 'storeMainCategories']);

    // Route::match(['GET', 'POST'], '/trash/store', [TrashController::class, 'store']);



    Route::get('/paper-nav', [DataController::class, 'getMainCategoryNames']);



    // Email routes
    Route::match(['GET', 'POST'], '/email/verify', [EmailController::class, 'verify'])->name('verification.notice');
    Route::post('/email/verify/validate', [EmailController::class, 'validateRequest']);
    Route::get('/email/resend', [EmailController::class, 'resendEmail']);

    // User account routes
    Route::post('/upload-paper', [DashboardController::class, 'uploadPaper']);

    // Payment routes
    Route::post('/process-withdrawal', [PaymentController::class, 'withdraw']);
    Route::post('/process-support', [PaymentController::class, 'supportUs']);

    // Comments
    Route::post('/comment', [CommentController::class, 'comment']);
    Route::get('/is-auth', [CommentController::class, 'isAuth']);


    // Admin routes
    Route::group(['prefix' => 'admin'], function () {
        Route::get('/users', [AdminController::class, 'users']);
        Route::delete('/delete-user/{id}', [AdminController::class, 'deleteUser']);
        Route::get('/pending-papers', [AdminController::class, 'pendingPapers']);
        Route::get('/approved-papers', [AdminController::class, 'approvedPapers']);
        Route::delete('/delete-pending-paper/{id}', [AdminController::class, 'deletePendingPaper']);
        Route::delete('/delete-approved-paper/{id}', [AdminController::class, 'deleteApprovedPaper']);
        Route::delete('/delete-blog/{id}', [AdminController::class, 'deleteBlogPost']);
        Route::get('/approve-paper/{id}', [AdminController::class, 'approvePaper']);
        Route::get('/blogs', [AdminController::class, 'blogs']);
        Route::get('/supports', [AdminController::class, 'supports']);
        Route::get('/withdrawals', [AdminController::class, 'withdrawals']);
        Route::match(['GET', 'POST'], '/blog-create', [AdminController::class, 'createBlog']);

        // CK Editor routes for creating a blog post
        Route::post('/insert-image', [AdminController::class, 'uploadImage']);
    });


    // Test email
    Route::get('/trash/email', [TrashController::class, 'email']);

    // Forgot password
    Route::match(['GET', "POST"], '/forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('/forgot-password/validate', [AuthController::class, 'validateForgotPassword']);
    Route::post('/forgot-code/validate', [AuthController::class, 'validateForgotCode']);
    Route::match(['GET', 'POST'], '/forgot-code', [AuthController::class, 'checkCode']);
    Route::post('/new-password/validate', [AuthController::class, 'validateNewPassword']);
    Route::match(['GET', 'POST'], '/new-password', [AuthController::class, 'changePassword']);

    // Beauty issues
    Route::get('/like/{id}', [BueatyController::class, 'like']);
    Route::get('/dislike/{id}', [BueatyController::class, 'dislike']);
    Route::get('/love/{id}', [BueatyController::class, 'love']);
    Route::get('/comment-love/{id}', [BueatyController::class, 'commentLove']);
    Route::post('/bueaty/validate', [BueatyController::class, 'validateRequest']);
    Route::post('/bueaty/register', [BueatyController::class, 'register']);
    Route::post('/bueaty/login', [BueatyController::class, 'login']);
    Route::get('/bueaty/paginate/{pag_id}/{blog_id}', [BueatyController::class, 'paginate']);

    Route::get('/check-auth', [AuthController::class, 'checkAuth']);

    // site maps
    Route::get('/sitemap', [SitemapController::class, 'newSiteMap']);

    // View email on the browser
    // Route::get('/nde', function () {
    //     return new ForgotPassword('nde', '12345');
    // });
});


Route::get('/test', function () {
    return Inertia::render('emails/Test');
});