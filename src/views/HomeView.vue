<template>
  <!-- <div style="height:200vh" class="max-w-screen-lg mx-auto">eujowo</div> -->
  <div class="container">
    <VForm v-slot="{ errors }">
        <VField
          id="email"
          name="email"
          type="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.email"
        ></VField>
        <ErrorMessage name="email" class="text-red-400 text-sm"></ErrorMessage>
    </VForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
      },
    };
  },
};
</script>
