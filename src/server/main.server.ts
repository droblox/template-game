import {findNodes} from "@rbxts/droblox-core/helpers/instance";
import {Workspace} from "@rbxts/services";

// Print all baseparts in the Lua console
for (const x of findNodes(Workspace, (x): x is BasePart => x.IsA("BasePart"))) {
  print(x.Name);
}
