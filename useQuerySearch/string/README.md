## Get as a string 🔠

<br>

### Option 1

```javascript
import { ref } from "vue";

function useQuerySearch(search) {
   const result = ref({});
   const params = new URLSearchParams(search);

   for (const [key, value] of params) {
      result.value[key] =
         value.trim() === "" ? undefined : value.toString().trim();
   }

   return { result };
}
```

```javascript
const { result } = useQuerySearch(window.location.search);
```

#### Result:

```
http://localhost:8080/person?name=farhan&age=20

{name: "farhan", age: "20"}
```

<br>

### Option 2

```javascript
import { ref } from "vue";

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
```

```javascript
const { result } = useQuerySearch(window.location.search);
```

#### Result:

```
http://localhost:8080/person?name=farhan&age=20

["farhan", "20"]
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
      obj[key] = value.trim() === "" ? undefined : value.toString().trim();
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
http://localhost:8080/person?name=farhan&age=20

[{name: "farhan"}, {age: "20"}]
```
