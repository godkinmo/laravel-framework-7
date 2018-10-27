<template>
    <f7-block>
      <p>Home content</p>
      
      
      <div v-if="loading">loading...</div>
      <div v-else>
          <ul>
              <li v-for="post in posts">{{ post.title }}</li>
          </ul>
      </div>
    </f7-block>
</template>

<script>
    import axios from 'axios'
    
    export default {
        data() {
            return {
                loading: true,
                posts: [],
            }
        },
        
        mounted() {
            axios.get('/api/posts')
                .then(response => {
                    this.posts = response.data
                    this.loading = false
                })
        }
    }
</script>