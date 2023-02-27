import { Package } from '@qoopido/lerna.core';

export interface ExecScriptOption {
  args?: string[];
  cwd: string;
  pkg: Package;
  shell: boolean;
  extendEnv: boolean;
  env: { [key: string]: string | undefined };
  reject: boolean;
}
export interface ExecStreamingOption extends ExecScriptOption {
  prefix?: boolean;
}
