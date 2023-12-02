<script setup>
const { renType } = defineProps(['renType'])

const { pending, data: konten } = await useFetch("http://localhost:5000/api/blog", {
    lazy: false
})
</script>

<template>
    <div class=" container-fluid ">
        <div class=" utama row-1">
            <div class=" col border border-3 border-black border-opacity-50 shadow w-auto p-3 rounded-3 mb-5">
                <span>Sort By: </span>
                <button class="btn btn-sm btn-secondary dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                Latest
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Hot</a></li>
                <li><a class="dropdown-item" href="#">Latest</a></li>
                <li><a class="dropdown-item" href="#">Oldest</a></li>
                </ul>
            </div>
            
            <div class="semua-konten" v-for="knten in konten.docs">
                <div class=" blog-col col border border-3 border-black border-opacity-50 shadow w-auto p-3 rounded-3 my-4">
                    <div class="blog-img-outer">
                        <div class=" blog-img d-flex rounded-3">
                            <img :src="`${knten.blogimg.sizes.thumbnail.url}`">
                        </div>
                    </div>
                    <div class=" blog-isi">
                        <p><NuxtLink :to="`/${renType}/tp/${knten.thistp.tpname}`" class=" blog-topik text-decoration-none">tp/{{ knten.thistp.tpname }}</NuxtLink></p>
                        <NuxtLink :to="`/${renType}/tp/${knten.thistp.tpname}/blog/${knten.id}`" class=" blog-jdul text-decoration-none">{{ knten.judulblog }}</NuxtLink>
                        <p class=" mt-4 ">By: {{ knten.uploader.username }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .utama {
        margin: 5rem 15%
    }
    .blog-col {
        display: flex;
    }
    .blog-img {
        display: block;
        min-width: 200px;
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
    .blog-img img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: auto;
        -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
    }
    .blog-isi {
        padding: 0 2%;
        position: relative;
    }
    .blog-topik {
        font-size: 22px;
        font-weight: 700;
        color: rgba(77, 60, 117, 75)
    }
    .blog-jdul {
        font-size: 24px;
        font-weight: 600;
        color: rgba(4, 2, 18, 100)
    }
    @Media (max-width: 991px) {
        .utama {
            margin: 5rem 7%
        }
    }
    @media (max-width: 650px) {
        .blog-col {
            display: block;
        }
        .blog-img-outer {
            display: flex;
            justify-content: center;
        }
        .blog-img {
            display: flex;
        }
        .blog-isi {
            text-align: center;
            padding: 2% 0;
            display: block;
        }
        .blog-topik {
            font-size: 18px;
        }
        .blog-jdul {
            font-size: 20px;
        }
    }
</style>