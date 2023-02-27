import { Package } from '@qoopido/lerna.core';

export interface RunScriptOption {
  args: any;
  npmClient: string;
  pkg: Package;
  reject?: boolean;
}
export interface ScriptStreamingOption extends RunScriptOption {
  prefix?: boolean;
}
