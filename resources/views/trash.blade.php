@extends('layouts.app')

@section('content')
    <div class="container mt-5">
       <form action="/trash/store" method="POST" enctype="multipart/form-data">
        @if (session('success'))
            <div class="alert alert-success text-center">
                <span>{{ session('success') }}</span>
            </div>
        @endif
        @csrf
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" name="title" class="form-control form-control-sm @error('title')
                    is-invalid
                @enderror" id="title" placeholder="Blog title">
                @error('title')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Main Image</label>
                <input class="form-control form-control-sm @error('image')
                    is-invalid
                @enderror" name="image" type="file" id="image" accept=".jpg,.png.jpeg">
                @error('image')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="blog_category_id" class="form-label">Select category</label>
                <select class="form-select form-select-sm @error('blog_category_id')
                    is-invalid
                @enderror" name="blog_category_id">
                    <option value="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                @error('blog_category_id')
                    <div class="invalid-feedback">{{ $message }}</div>
                 @enderror
            </div>
            <div class="mb-3">
                <label for="sub_text" class="form-label">Sub text</label>
                <textarea name="sub_text" class="form-control form-control-sm @error('sub_text')
                    is-invalid
                @enderror" id="sub_text" placeholder="Blog sub_text" cols="30" rows="5"></textarea>
                @error('sub_text')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="body" class="form-label">Body</label>
                <textarea name="body" class="form-control form-control-sm @error('body')
                    is-invalid
                @enderror" id="body" placeholder="Blog body" cols="30" rows="10"></textarea>
                @error('body')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <button class="btn btn-primary">Submit</button>
            </div>
       </form>
    </div>
@endsection