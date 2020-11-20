<template>
  <div>
    <Slider />

    <ChallengesOwn />

    <ChallengesAll />

    <Forma />
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import ChallengesOwn from "@/components/ChallengesOwn";
import ChallengesAll from "@/components/ChallengesAll";
import Forma from "@/components/Forma";

export default {
  name: "Home",
  components: {
    Slider,
    ChallengesOwn,
    ChallengesAll,
    Forma,
  },
};
</script>
