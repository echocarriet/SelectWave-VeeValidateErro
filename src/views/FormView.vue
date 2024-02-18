<template>
  <div class="container">
    <VForm v-slot="{ errors }">
      <VField
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email"
        rules="email|required"
        v-model="user.email"
      ></VField>
      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </VForm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
    };
  },
};
</script>
