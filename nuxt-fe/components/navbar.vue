
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed">
        <div class="container-fluid">
            <NuxtLink to="/" class="navbar-brand"><strong>TOP-Pick</strong></NuxtLink>

            <div class=" align-items-center pb-3 ">
                <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end flex-grow-0 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hello, User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body w-auto ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold">
                    <li class="nav-item dropdown mx-1 ">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Followed
                        </a>
                        <ul class="dropdown-menu">
                        <li><NuxtLink class="dropdown-item fw-semibold" :to="`/${renType}/tp/Anime`">Anime</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item fw-semibold" :to="`/${renType}/tp/Indonesia`">Indonesia</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item fw-semibold" :to="`/${renType}/tp/ITS`">ITS</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item fw-semibold" :to="`/${renType}/tp/KeluhKesahMahasiswa`">KeluhKesahMahasiswa</NuxtLink></li>
                        <li><NuxtLink class="dropdown-item fw-semibold" :to="`/${renType}/tp/Makan_murah`">Makan_murah</NuxtLink></li>
                        </ul>
                    </li>
                    <li class="nav-item mx-1 ">
                        
                        <NuxtLink :to="`/${renType}/tp`" class="nav-link active " aria-current="page">Discover</NuxtLink>
                    </li>
                    <li class="nav-item mx-1 ">
                        <a class="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item mx-1 ">
                        <a class="nav-link active" href="#">Profile</a>
                    </li>
                    <li class="nav-item mx-1 ">
                        <NuxtLink :to="`/${renType}/login`" class="btn btn-outline-success nav-link">Login</NuxtLink>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const { renType } = defineProps(['renType'])
</script>