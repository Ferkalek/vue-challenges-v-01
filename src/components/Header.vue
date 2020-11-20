<template>
  <div
    class="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs"
  >
    <div class="ml-8 text-lg text-gray-900">{{ "LogoText" | localize }}</div>
    <div class="flex">
      <button
        class="p-2 hover:bg-gray-200 rounded-lg"
        type="button"
        @click="addChallenge"
      >
        <svg
          class="w-5 h-5 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>

      <button
        class="p-2 hover:bg-gray-200 rounded-lg"
        type="button"
        @click="menu"
      >
        <svg
          class="w-5 h-5 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div class="relative">
        <button
          @click="open = !open"
          class="flex flex-row hover:bg-gray-200 items-center p-2 rounded-lg text-gray-900 text-left text-sm"
        >
          <span class="w-5" v-if="currentLanguage">{{
            currentLanguage.title
          }}</span>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            :class="{ 'rotate-180': open, 'rotate-0': !open }"
            class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          class="-mr-1 -mt-1 absolute block h-screen origin-top-right right-0 top-0 w-screen"
          :class="{
            block: open,
            hidden: !open,
          }"
          @click="open = false"
        ></div>
        <div
          class="absolute origin-top-right right-0"
          :class="{
            block: open,
            hidden: !open,
          }"
        >
          <ul
            class="mt-2 py-2 bg-white rounded-md shadow-lg"
            :class="{
              'animate-dropdownopen': open,
              'animate-dropdownclose': !open,
            }"
          >
            <li
              class="text-sm cursor-pointer cursor-pointer hover:bg-gray-200 hover:text-gray-600 py-2 px-5"
              v-for="lan in languages"
              :key="lan.locale"
              @click="changeLang(lan)"
              :class="{
                'bg-gray-200 text-gray-600': currentLanguage === lan,
              }"
            >
              {{ lan.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { locales } from "@/constants/locales.const";

export default {
  name: "Header",
  props: ["locale"],
  data: () => ({
    open: false,
    currentLanguage: null,
    languages: [],
  }),
  mounted() {
    this.currentLanguage = locales.find(
      (loc) => loc.locale === this.$store.getters.locale
    );
    this.languages = locales;
  },
  methods: {
    addChallenge() {},

    menu() {},

    changeLang(lan) {
      this.currentLanguage = lan;
      this.open = false;

      this.$store.dispatch("setLocaleToLocalStorage", lan.locale);
    },
  },
};
</script>
