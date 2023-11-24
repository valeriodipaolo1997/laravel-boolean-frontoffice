<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      drinks_api: "http://127.0.0.1:8000/api/drinks/",
      drinks: [],

      categories_api: "http://127.0.0.1:8000/api/categories/",
      categories: [],

      currentPage: 1,
      links: [],
      pageURI: "?page=",
    };
  },

  methods: {
    getPage(url) {
      axios.get(url).then((response) => {
        this.drinks = response.data.results.data;
        this.links = response.data.results.links;
        console.log(url);
      });
    },
  },

  mounted() {
    this.getPage(this.drinks_api + this.pageURI);

    axios.get(this.categories_api).then((response) => {
      this.categories = response.data.results;
      console.log(this.categories);
    });
  },
};
</script>
<template>
  <div
    class="mb-5 rounded-4 bg-dark text-light border-5 border-start border-end border-info"
  >
    <div class="text-center py-4">
      <h1 class="display-5 fw-bold">Welcome to our cocktails bar! 🍸</h1>
    </div>
  </div>
  <div class="d-flex">
    <div id="home" class="container">
      <div class="row g-4">
        <div class="col-4" v-for="drink in this.drinks">
          <div class="card h-100 border-5 border-dark rounded-3 bg-info">
            <div class="card-header bg-info">
              <h4>
                {{ drink.name }}
              </h4>
            </div>
            <div class="card-body bg-dark text-light">
              <img :src="drink.thumb" alt="" class="img-fluid rounded" />
              <section class="pt-3 d-flex justify-content-evenly fw-bold">
                <span v-if="drink.isAlcoholic"> Alcoholic </span>
                <span v-else> Analcoholic </span>
                <span>
                  {{ drink.glass }}
                </span>
              </section>
            </div>
            <div class="card-footer h-100 py-3 bg-info">
              <!-- infos -->
              <p class="fw-semibold border-start border-dark ps-1">
                {{ drink.instruction }}
              </p>
              <div class="d-flex align-items-center">
                <div>
                  <div class="row">
                    <div class="col-7">
                      <h4>Ingredients</h4>
                      <p>
                        {{ drink.ingredients }}
                      </p>
                    </div>
                    <div class="col-5">
                      <h4>Measures</h4>
                      <p>
                        {{ drink.measures }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="d-flex justify-content-center pt-5">
        <ul class="pagination bg-dark p-2 rounded-2">
          <li class="page-item" v-for="link in this.links">
            <a
              class="page-link text-dark"
              role="button"
              @click="getPage(link.url)"
              v-html="link.label"
            ></a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="category-selector mb-3 rounded-3 text-light p-3">
      <div class="card border-dark mb-3">
        <div class="card-header">Categories</div>
        <div class="card-body">
          <ul class="list-unstyled">
            <li v-for="category in categories">
              <router-link
                :to="{ name: 'single-category', params: { id: category.id } }"
                class="link-dark link-underline-info"
              >
                {{ category.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

