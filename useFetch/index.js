import { onMounted, onUnmounted, ref } from "vue";

function useFetch(endpoint) {
   const data = ref();
   const isLoading = ref(true);
   const controller = new AbortController();
   const { signal } = controller;

   onMounted(async () => {
      try {
         const res = await fetch(endpoint, { signal });
         data.value = await res.json();
      } catch (err) {
         throw new Error(err);
      }

      isLoading.value = false;
   });

   onUnmounted(() => controller.abort());

   return { data, isLoading };
}
