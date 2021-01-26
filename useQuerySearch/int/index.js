import { ref } from "vue";

// Option 1
function useQuerySearch(search) {
   let result = ref({});
   const params = new URLSearchParams(search);

   for (let [key, value] of params) {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === true
      ) {
         result.value[key] = parseInt(value.trim(), 10);
      } else {
         result.value[key] = undefined;
      }
   }

   return { result };
}

// Option 2
function useQuerySearch(search) {
   const result = ref([]);
   const params = new URLSearchParams(search);

   params.forEach((value) => {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === true
      ) {
         result.value.push(parseInt(value.trim(), 10));
      } else {
         result.value.push(undefined);
      }
   });

   return { result };
}

// Option 3
function useQuerySearch(search) {
   let obj = {};
   const result = ref([]);
   const params = new URLSearchParams(search);

   for (let [key, value] of params) {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === true
      ) {
         obj[key] = parseInt(value.trim(), 10);
      } else {
         obj[key] = undefined;
      }

      result.value.push(obj);
      obj = {};
   }

   return { result };
}
