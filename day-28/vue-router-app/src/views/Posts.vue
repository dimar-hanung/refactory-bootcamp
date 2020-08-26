<template>
  <div class="about mt-10">
    <!-- <h1>This is an about x</h1> -->
    <div v-for="(post,i) in posts" :key="i">
        <div class="flex text-left">
            <img src="../assets/logo.png" alt="">
            <div class="block mx-5">
                <h1 class="font-bold">{{post.title | capitalize}}</h1>
                <div>
                    {{post.body}}
                </div>
                <router-link class="text-orange font-bold" :to="`posts/${post.id}`">Read More</router-link>
                
            </div>
        </div>
    </div>
  </div>
</template>

