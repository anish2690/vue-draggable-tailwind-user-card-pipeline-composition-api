<template>
  <div id="app" class="min-h-screen w-screen bg-white-200 flex justify-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-10 bg-gray-200 m-10 pipeline">
      <div class="px-6 py-4" ref="pip1Ref">
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
      <div class="px-6 py-4" ref="pip2Ref">
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
import { reactive, onMounted, ref, watch } from "@vue/composition-api";

interface user {
  id: number;
  name: string;
  avatar: string;
}
//  new composition api
export default Vue.extend({
  name: "App",
  components: {
    draggable,
    UserCard
  },
  setup() {
    const pip1Ref = ref(null);
    const pip2Ref = ref(null);

    const state = reactive({
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
    });
    onMounted(() => {
      console.log(
        "refs ---> ",
        state,
        "pipline 1 ->",
        pip1Ref.value,
        "pipline 2 ->",
        pip2Ref.value
      );
    });
    function onEdit(user: user) {
      alert(`Editing ${user.name}`);
    }
    function onDelete(user: user) {
      alert(`Deleting ${user.name}`);
    }
    watch(
      () => state.list1,
      (newList, prevList) => {
        console.log("list 1 changes -->", newList);
      }
    );
    watch(
      () => state.list2,
      (newList, prevList) => {
        console.log("list 2 changes -->", newList);
      }
    );

    return {
      list1: state.list1,
      list2: state.list2,
      onEdit,
      onDelete,
      pip1Ref,
      pip2Ref
    };
  }
});
</script>

<style>
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
