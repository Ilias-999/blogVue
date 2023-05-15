<template>
    <div class="container">
      <h1>Liste des articles</h1>
      <div class="row mx-5">
        <div class="col-md-4" v-for="article in articles" :key="article.id">
          <div class="card" style="width: 18rem;">
            <img :src="article.image" class="card-img-top" alt="Article Image">
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.summary }}</p>
              <router-link :to="`/Article/${article.id}`" class="btn btn-primary">Go somewhere</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>

  export default {
    name: 'ArticleList',
    data() {
      return {
        articles: []
      };
    },
    mounted(){
        this.getData()
    },
    methods:{
        async getData(){
            try {
                const response = await fetch('http://localhost:5173/articles.json')
                const articles = await response.json();
                this.articles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
            }catch(error){
                console.log(error)
            }
        }
    }
  };
  </script>