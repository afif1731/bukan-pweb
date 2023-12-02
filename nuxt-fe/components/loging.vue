<template>
    <div class=" container-fluid ">
        <div class=" utama row-1 border border-3 border-primary border-opacity-50 shadow w-auto rounded-3">
            <div class=" col p-3">
                <h3 class=" text-center fw-bold mb-5">LOGIN</h3>
                <form>
                    <div class="row mb-4">
                        <label for="inputEmail" class="col-sm-2 col-form-label fw-bold">Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail" required>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label for="inputPassword" class="col-sm-2 col-form-label fw-bold">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" required>
                        </div>
                    </div>
                    <span class=" text-danger d-flex "> Invalid Email/Password!</span>
                    <button type="submit" class="btn btn-lg  btn-primary mt-3 ">Sign in</button>
                    </form>
                    <div>
                        <p class=" text-center mt-4">Don't have an Account? <NuxtLink :to="`/${renType}/register`" class=" link-primary">Register</NuxtLink></p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { renType } = defineProps(['renType'])
</script>

<style>
    .utama {
        margin: 5rem 30%
    }
    @Media (max-width: 991px) {
        .utama {
            margin: 5rem 7%
        }
    }
</style>