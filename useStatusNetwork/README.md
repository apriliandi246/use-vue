# Check your status network 🔌

<br>

```javascript
import { reactive } from "vue";

function useStatusNetwork() {
   const statusNetwork = reactive({
      isOnline: navigator.onLine && true,
      isOffline: navigator.onLine === false && true,
   });

   window.addEventListener("load", () => {
      window.addEventListener("online", () => {
         statusNetwork.isOnline = true;
         statusNetwork.isOffline = false;
      });

      window.addEventListener("offline", () => {
         statusNetwork.isOffline = true;
         statusNetwork.isOnline = false;
      });
   });

   return { statusNetwork };
}
```

```javascript
const { statusNetwork } = useStatusNetwork();
```
