<template>
  <v-container>
    <v-card>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img src="/logo-vuetify.svg" class="my-3" contain height="200" />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            <div>Welcome to the Vuetify 3 Alpha</div>
          </h1>

          <h3>Vite Preview</h3>

          <p class="subheading font-weight-regular">
            For help and collaboration with other Vuetify developers,
            <br />please join our online
            <a href="https://community.vuetifyjs.com" target="_blank"
              >Discord Community</a
            >
          </p>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-5">What's next?</h2>

          <v-row justify="center">
            <a
              v-for="(next, i) in whatsNext"
              :key="i"
              :href="next.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ next.text }}
            </a>
          </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-5">Important Links</h2>

          <v-row justify="center">
            <a
              v-for="(link, i) in importantLinks"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ link.text }}
            </a>
          </v-row>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-5">Ecosystem</h2>

          <v-row justify="center">
            <a
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ eco.text }}
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="pa-4">
          <v-btn
            class="my-1"
            block
            @click="buttonClickFunction"
            @shortkey="buttonShortkeyFunction"
            v-shortkey.once="['space']"
          >
            <v-icon>mdi-email</v-icon> Icon-Button with shortkey (Space)
          </v-btn>
          Implemented with
          <a
            href="https://github.com/rodrigopv/vue3-shortkey"
            target="_blank"
            rel="noopener"
            >vue3-shortkey on github</a
          >
          <p>Shortkey currently does not trigger button effect yet :(</p>
        </v-col>

        <v-col cols="4">
          <v-alert dense outlined prominent text type="success">
            {{ displayText }} Count: {{ buttonCounter }}
          </v-alert>
        </v-col>

        <v-col cols="4">
          <v-text-field
            class="my-2"
            label="Data bind example"
            v-model="dataBinds.textField"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-btn class="mt-4" @click="greetFunction"
            >Show Number with annyoning alert</v-btn
          >
        </v-col>
        <v-col cols="4">
          <v-text-field
            class="mt-4"
            v-model="buttonCounter"
            label="Number textfield"
            filled
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "HelloVeutify",
  data: () => ({
    displayText: "InitialText",
    buttonCounter: 0,
    dataBinds: {
      textField: "textfield init-value",
    },
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Roadmap",
        href: "https://vuetifyjs.com/introduction/roadmap/",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
  methods: {
    buttonClickFunction: function (event: any) {
      this.displayText = "Button was clicked";
      this.buttonCounter++;
      console.log("Button click function called");
      console.debug(event);
    },
    buttonShortkeyFunction: function (event: any) {
      this.displayText = "Button triggerd by shortkey";
      this.buttonCounter++;
      console.log("Button shortkey function called");
      console.debug(event);
    },
    greetFunction: function () {
      alert("The number is: " + this.buttonCounter);
      //this.$refs.helloComponent.sayHello()
    },
  },
  created() {},
  mounted() {},
  destoryed() {},
});
</script>
