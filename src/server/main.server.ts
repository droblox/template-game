import {Instance} from "@rbxts/droblox-core";
import {Workspace} from "@rbxts/services";

// Print all baseparts in the Lua console
for (const x of Instance.findNodes(Workspace, (x): x is BasePart => x.IsA("BasePart"))) {
  print(x.Name);
}
