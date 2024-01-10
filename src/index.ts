import "react-native-get-random-values";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

import {
  usePrefab,
  PrefabProvider,
  PrefabTestProvider,
  prefab,
} from "@prefab-cloud/prefab-cloud-react";

export { usePrefab, PrefabProvider, PrefabTestProvider, prefab };
