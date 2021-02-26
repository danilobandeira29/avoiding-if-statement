import { CreateNode } from "./CreateNode"

export class ValueNode extends CreateNode {
  constructor(value: number) {
    super(value, '#', null, null)
  }

  evaluate(): number {
    return this.value
  }
}