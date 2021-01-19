import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Sneaker {
  readonly id: string;
  readonly brand?: string;
  readonly model?: string;
  readonly submodel?: string;
  readonly colorway?: string;
  constructor(init: ModelInit<Sneaker>);
  static copyOf(source: Sneaker, mutator: (draft: MutableModel<Sneaker>) => MutableModel<Sneaker> | void): Sneaker;
}