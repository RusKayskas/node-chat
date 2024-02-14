<template>
  <Vcontainer>
    <VForm @submit.prevent="onSubmit">
      <VCard max-width="600" class="mx-auto pa-5">
        <VCardTitle>
          <div class="d-flex align-center justify-center">
            <VIcon icon="mdi-message-text"/>
            <h3 class="ml-2">Vue KsChatApp</h3>
          </div>
        </VCardTitle>
        <VCardText class="py-4">
          <VTextField label="Username" v-model="state.username"></VTextField>
          <VSelect :items="rooms" label="Room" v-model="state.room"></VSelect>
        </VCardText>
        <VCardActions>
          <VBtn 
            block
            color="primary"
            :disabled="!state.username || !state.room"
            variant="outlined"
            type="submit"
          >
            Join Chatapp
          </VBtn>
        </VCardActions>
      </VCard>
    </VForm>
  </Vcontainer>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const rooms = ['vue', 'nuxt', 'socket', 'pinia'];

  const state = reactive({
    username: '',
    room: rooms[0],
  });

  const onSubmit = () => {
    console.log('[submit]');
    router.push(`/chat?username=${state.username}&room=${state.room}`);
  };

  
</script>
