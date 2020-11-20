<template>
  <div>
    <form @submit.prevent="">
      <h2>{{ "CreateChallenge" | localize }}</h2>
      <div>
        <label for="image">{{ "UploadImage" | localize }}</label>
        <input id="image" name="image" type="file" />
      </div>
      <div>
        <label for="title">{{ "EnterTitle" | localize }}</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label for="period">{{ "EnterPeriod" | localize }}</label>
        <input type="text" name="period" />
      </div>

      <button type="submit">{{ "Create" | localize }}</button>
    </form>
  </div>
</template>
