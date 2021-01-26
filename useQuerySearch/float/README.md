## Get as a float 🔢◾🔢

<br>

### Option 1

```javascript
import { ref } from "vue";

function useQuerySearch(search) {
   const result = ref({});
   const params = new URLSearchParams(search);

   for (let [key, value] of params) {
      if (
         isNaN(value.trim()) === false &&
         Number.isInteger(parseFloat(value.trim())) === false
      ) {
         result.value[key] = parseFloat(value.trim());
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
http://localhost:8080/person?page=6.4&age=20.6

{page: 6.4, age: 20.6}
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
         Number.isInteger(parseFloat(value.trim())) === false
      ) {
         result.value.push(parseFloat(value.trim()));
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
http://localhost:8080/person?page=6.4&age=20.6

[6.4, 20.6]
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
         Number.isInteger(parseFloat(value.trim())) === false
      ) {
         obj[key] = parseFloat(value.trim());
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
http://localhost:8080/person?page=6.4&age=20.6

[{page: 6.4}, {age: 20.6}]
```
