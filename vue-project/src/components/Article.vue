<template>
    <div class="container">
      <h1>{{ article.title }}</h1>
      <img class="my-2 height" :src="article.image" alt="Article Image">
      <p>Date de création: {{ article.date }}</p>
      <p>{{ article.content }}</p>

      <form @submit.prevent="submitMessage">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message" rows="4" v-model="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
    </div>
</template>


  <script>
  export default {
    name: 'Article',
    data() {
      return {
        article: {
        "id": 0,
        "title": "",
        "date": "",
        "summary": "",
        "content": "",
        "image": ""
        },
        name: "",
        message: "",
        title:""
      };
    },
    mounted() {
      this.getArticle();
    },
    methods: {

        async getArticle() {
            try {
                const articleId = this.$route.params.id;
                const response = await fetch('http://localhost:5173/articles.json');
                const articles = await response.json();
                console.log(articles)
                // Find the article with the matching ID
                this.article = articles.find(article => article.id == articleId);


            } catch (error) {
                console.error(error);
            }
        },
        submitMessage() {
            const messageData = {
            name: this.name,
            message: this.message,
            title: this.article.title
            };
            this.$emit("message-submitted", messageData);
            // Clear the input fields
            this.name = "";
            this.message = "";
            this.title = ""
        }

    }
  };
  </script>

<style  scoped>
.height{
    height: 200px;
}
</style>