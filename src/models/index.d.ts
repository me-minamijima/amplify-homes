import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type G22MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Mag {
  readonly id: string;
  readonly image_url?: string;
  readonly tag?: string;
  readonly tag_color?: string;
  readonly text?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Mag, MagMetaData>);
  static copyOf(source: Mag, mutator: (draft: MutableModel<Mag, MagMetaData>) => MutableModel<Mag, MagMetaData> | void): Mag;
}

export declare class G22 {
  readonly id: string;
  readonly image_url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<G22, G22MetaData>);
  static copyOf(source: G22, mutator: (draft: MutableModel<G22, G22MetaData>) => MutableModel<G22, G22MetaData> | void): G22;
}