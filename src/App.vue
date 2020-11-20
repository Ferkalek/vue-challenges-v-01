<template>
  <div class="flex flex-col h-full">
    <!-- <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <Header v-if="locale" :locale="locale" />

    <Content />

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { locales } from "./constants/locales.const";

export default {
  name: "App",
  data: () => ({
    locale: null,
  }),
  components: {
    Header,
    Content,
    Footer,
  },
  async created() {
    this.locale = await this.$store.dispatch("getLocaleFromLocalStorage");
    if (this.locale === null) {
      this.locale = locales[0].locale;
      this.$store.dispatch("setLocaleToLocalStorage", this.locale);
    }
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
</style>
