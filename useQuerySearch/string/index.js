import { ref } from "vue";

// Option 1
function useQuerySearch(search) {
   const result = ref({});
   const params = new URLSearchParams(search);

   for (const [key, value] of params) {
      result.value[key] =
         value.trim() === "" ? undefined : value.toString().trim();
   }

   return { result };
}

// Option 2
function useQuerySearch(search) {
   const result = ref([]);
   const params = new URLSearchParams(search);

   params.forEach((value) => {
      value.trim() === ""
         ? result.value.push(undefined)
         : result.value.push(value.toString().trim());
   });

   return { result };
}

// Option 3
function useQuerySearch(search) {
   let obj = {};
   const result = ref([]);
   const params = new URLSearchParams(search);

   for (let [key, value] of params) {
      obj[key] = value.trim() === "" ? undefined : value.toString().trim();
      result.value.push(obj);
      obj = {};
   }

   return { result };
}
