<template>
  <div id="app" class="min-h-screen w-screen bg-white-200 flex justify-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-10 bg-gray-200 m-10 pipeline">
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#photography</span>
      </div>
      <draggable
        :list="list1"
        :animation="200"
        ghost-class="moving-card"
        group="users"
        filter=".action-button"
        class="w-full max-w-md h-screen"
        tag="ul"
      >
        <user-card
          v-for="user in list1"
          :key="user.id"
          :user="user"
          @on-edit="onEdit"
          @on-delete="onDelete"
        ></user-card>
      </draggable>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-10 bg-gray-200 m-10 pipeline">
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#travel</span>
      </div>
      <draggable
        :list="list2"
        :animation="200"
        ghost-class="moving-card"
        group="users"
        filter=".action-button"
        class="w-full max-w-lg h-screen"
        tag="ul"
      >
        <user-card
          v-for="user in list2"
          :key="user.id"
          :user="user"
          @on-edit="onEdit"
          @on-delete="onDelete"
        ></user-card>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import draggable from "vuedraggable";
import UserCard from "@/components/UserCard.vue";

interface user {
  id: number;
  name: string;
  avatar: string;
}

export default Vue.extend({
  name: "App",
  components: {
    draggable,
    UserCard
  },
  data() {
    return {
      list1: [
        {
          id: 1,
          name: "Adrian Schubert",
          avatar:
            "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
        },
        {
          id: 2,
          name: "Violet Gates",
          avatar: "https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png"
        },
        {
          id: 3,
          name: "Steve Jobs",
          avatar: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png"
        },
        {
          id: 4,
          name: "Yassine Smith",
          avatar:
            "https://pickaface.net/gallery/avatar/unr_yassine_191124_2012_3gngr.png"
        },
        {
          id: 5,
          name: "Senior Saez",
          avatar:
            "https://pickaface.net/gallery/avatar/elmedinilla541c03412955c.png"
        }
      ],
      list2: []
    };
  },
  methods: {
    onEdit(user: user) {
      alert(`Editing ${user.name}`);
    },
    onDelete(user: user) {
      alert(`Deleting ${user.name}`);
    }
  }
});
</script>

<style>
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.moving-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
.pipeline {
  min-width: 400px;
}
.dropzone {
  width: 100%;
  height: 100%;
}
</style>
