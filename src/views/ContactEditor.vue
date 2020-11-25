<template>
  <div>
    <popup
      v-if="isConfirmPopupVisible"
      @close-popup="closePopup"
      @agree="agree"
    >
      <p>
        Are you sure you want to make changes?
      </p>
    </popup>

    <div v-if="contact">
      <h1>{{ contact.name }}</h1>
      <AddInfo @update-info="updateInfo" />
      <button class="btn indigo" @click="takeStepBack" :disabled="this.stepBackButtonDisabled">Step Back</button>
      <InfoList
        v-bind:infoForRender="this.infoForRender"
        v-bind:contact="contact"
        @re-render="reRenderInfo"
        @step-back="stepBack"
      />
    </div>
    <p v-else>Contact not found</p>
  </div>
</template>

<script>
import AddInfo from "@/components/AddInfo";
import InfoList from "@/components/InfoList";
import Popup from "@/components/Popup";
export default {
  name: "contactEditor",
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id)
    },
  },
  data() {
    return {
      isConfirmPopupVisible: false,
      infoForRender: [],
      informatioToChange: {},
      previousInfo: {},
      stepBackButtonDisabled: true
    };
  },
  mounted() {
    this.reRenderInfo();
  },
  components: {
    AddInfo,
    InfoList,
    Popup
  },
  methods: {
    reRenderInfo() {
      this.infoForRender = Array.from(
        new Map(Object.entries(this.contact.info))
      );
    },
    update (info) {
      this.contact.info = { ...this.contact.info, ...info }
      this.$store.dispatch("updateInfo")
    },
    closePopup() {
      this.isConfirmPopupVisible = false
    },
    agree() {
      this.isConfirmPopupVisible = false
      this.update(this.informatioToChange)
      this.reRenderInfo()
      this.stepBackButtonDisabled = false
    },
    updateInfo(newInfo) {
      this.previousInfo = {...this.contact.info}

      const key = Object.keys(newInfo)[0]

      if (key in this.contact.info) {
        this.isConfirmPopupVisible = true
        this.informatioToChange = {...newInfo}
      } else {
        this.update(newInfo)
        this.reRenderInfo()
        this.stepBackButtonDisabled = false
      }
    },
    stepBack(){
      this.previousInfo = {...this.contact.info}
      this.stepBackButtonDisabled = false
    },
    takeStepBack() {
      this.stepBackButtonDisabled = true
      this.contact.info = this.previousInfo
      this.$store.dispatch("updateInfo")
      this.reRenderInfo()
    }
  },
};
</script>
