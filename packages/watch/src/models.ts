import { Package } from '@qoopido/lerna.core';

export type ChokidarEventType = 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir';

export interface ChangesStructure {
  [pkgName: string]: {
    pkg: Package;
    changeFiles: Set<string>;
    timestamp: number;
  };
}
