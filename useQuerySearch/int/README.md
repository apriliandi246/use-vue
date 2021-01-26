## Get as a integer 🔢

<br>

### Option 1

```javascript
import { ref } from "vue";

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
```

```javascript
const { result } = useQuerySearch(window.location.search);
```

#### Result:

```
http://localhost:8080/person?page=6&age=20

{page: 6, age: 20}
```

<br>

### Option 2

```javascript
import { ref } from "vue";

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
```

```javascript
const { result } = useQuerySearch(window.location.search);
```

#### Result:

```
http://localhost:8080/person?page=6&age=20

[6, 20]
```

<br>

### Option 3

```javascript
import { ref } from "vue";

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
```

```javascript
const { result } = useQuerySearch(window.location.search);
```

#### Result:

```
http://localhost:8080/person?age=20&page=6

[{age: 20}, {page: 6}]
```
