<template>
    <div class="container text-center">
        <h2 class="my-5">Discover All Available Top-picks!</h2>
        <div class="row align-items-center flex-fill nihtp">
            <div class="col m-3 ">
                <div class="card" style="width: 18rem;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/P_20200909_090802_vHDR_On.jpg/800px-P_20200909_090802_vHDR_On.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col m-3 ">
                <div class="card" style="width: 18rem;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/P_20200909_090802_vHDR_On.jpg/800px-P_20200909_090802_vHDR_On.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col m-3 ">
                <div class="card" style="width: 18rem;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/P_20200909_090802_vHDR_On.jpg/800px-P_20200909_090802_vHDR_On.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col m-3 ">
                <div class="card" style="width: 18rem;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/P_20200909_090802_vHDR_On.jpg/800px-P_20200909_090802_vHDR_On.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { renType } = defineProps(['renType'])
const { data:toppik } = await useFetch("http://127.0.0.1:5000/api/toppick?sort=-tpslug&invoke=c6dad947-472a-44a6-a408-73f2eba545d6")
</script>

<style>
    .nihtp {
        margin: 3rem 10%;
    }
    @Media (max-width: 991px) {
        .nihtp {
            margin: 1rem 0
        }
    }
</style>