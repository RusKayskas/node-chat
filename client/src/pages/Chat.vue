<template>
  <VContainer>
    <VCard class="mx-auto pa-5">
      <VCardTitle class="pb-5">
        <div class="d-flex align-center justify-space-between text-primary">
          <div class="d-flex align-center">
            <VIcon icon="mdi-message-text" />
            <div class="font-weight-bold text-h6 ml-2">Vue ChatApp</div>
          </div>

          <VBtn color="primary" elevation="0" class="text-capitalize">
            Leave {{ $route.query.room }}
          </VBtn>

        </div>
      </VCardTitle>
      <VDivider />
      <VCardText class="py-6 px-6">
        <div class="d-flex">
          <!--SideBar-->
          <div class="bg-grey-lighten-3 py-4 px-6">
            <div class="mb-4">
              <div class="d-flex align-center mb-2 px-3 py-2 rounded-mb bg-white">
                <VIcon icon="mdi-message-text"/>
                <div class="text-body-1 ml-2">Room Name</div>
              </div>
              <div class="mb-2 text-body-1 ml-2 text-capitalize">Current Room</div>
            </div>

            <div class="d-flex align-center mb-2 px-3 py-2 rounded-md bg-white">
              <VIcon icon="mdi-account-multiple"/>
              <div class="text-body-1 ml-2">Users</div>
            </div>

            <VList>
              <VListItem v-for="(user, index) in users" :key="index">
                <VListItemTitle>{{ user.username }}</VListItemTitle>
                <VDivider v-if="user.username === route.query.username" />
              </VListItem>
            </VList>

          </div>

          <!--Chat-->
          <div style="height: 400px" class="overflow-y-auto px-6 flex-fill">
            <div 
              class="bg-transparent w-full mb-3 d-flex"
              v-for="(chat, index) in chats"
              :key="index"
              :class="{
                'justify-center': chat.username === 'VueChatApp Admin',
                'justify-end': chat.username === route.query.username,
                'justify-start': chat.username !== route.query.username
              }"
            >

            <div 
              class="px-6 py-2 w-50 rounded-md mb-3"
              :class="{
                'bg-red-lighten-4': chat.username === 'VueChatApp admin',
                'bg-blue-lighten-5': chat.username === route.query.username,
                'bg-light-green-lighten-4': 
                  chat.username !== route.query.username && 
                  chat.username !== 'VueChatapp Admin' 
              }"
            >
              
            </div>

            </div>

          </div>


        </div>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>